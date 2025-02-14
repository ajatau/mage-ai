terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = var.aws_region
}

resource "aws_ecs_cluster" "aws-ecs-dev-cluster" {
  name = "${var.app_name}-${var.app_environment}-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name        = "${var.app_name}-ecs"
    Environment = var.app_environment
  }
}

resource "aws_cloudwatch_log_group" "log-group" {
  name = "${var.app_name}-${var.app_environment}-logs"

  tags = {
    Application = var.app_name
    Environment = var.app_environment
  }
}

data "template_file" "env_vars" {
  template = file("env_vars.json")

  vars = {
    aws_access_key_id     = var.AWS_ACCESS_KEY_ID
    aws_secret_access_key = var.AWS_SECRET_ACCESS_KEY
    lambda_func_arn       = "${aws_lambda_function.terraform_lambda_func.arn}"
    lambda_func_name      = "${aws_lambda_function.terraform_lambda_func.function_name}"
    ecs_cluster_name      = "${var.app_name}-${var.app_environment}-cluster"
    ecs_task_definition   = "${var.app_name}-dev-task"
    ecs_container_name    = "${var.app_name}-${var.app_environment}-container"
    database_connection_url = var.DATABASE_CONNECTION_URL
  }
}

resource "aws_ecs_task_definition" "manager-task" {
  family = "${var.app_name}-task"

  container_definitions = <<DEFINITION
  [
    {
      "name": "${var.app_name}-${var.app_environment}-container",
      "image": "${var.docker_image}",
      "command": ["mage", "start", ".", "--manage-instance", "1"],
      "environment": ${data.template_file.env_vars.rendered},
      "essential": true,
      "mountPoints": [
        {
          "readOnly": false,
          "containerPath": "/home/src",
          "sourceVolume": "${var.app_name}-fs"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "${aws_cloudwatch_log_group.log-group.id}",
          "awslogs-region": "${var.aws_region}",
          "awslogs-stream-prefix": "${var.app_name}-${var.app_environment}"
        }
      },
      "portMappings": [
        {
          "containerPort": 6789,
          "hostPort": 6789
        }
      ],
      "cpu": ${var.ecs_task_cpu},
      "memory": ${var.ecs_task_cpu},
      "networkMode": "awsvpc"
    }
  ]
  DEFINITION

  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  memory                   = var.ecs_task_memory
  cpu                      = var.ecs_task_cpu
  execution_role_arn       = aws_iam_role.ecsTaskExecutionRole.arn
  task_role_arn            = aws_iam_role.ecsTaskExecutionRole.arn

  volume {
    name = "${var.app_name}-fs"

    efs_volume_configuration {
      file_system_id     = aws_efs_file_system.file_system.id
      transit_encryption = "ENABLED"
    }
  }

  tags = {
    Name        = "${var.app_name}-ecs-td"
    Environment = var.app_environment
  }

  depends_on = [aws_lambda_function.terraform_lambda_func]
}

resource "aws_ecs_task_definition" "dev-task" {
  family = "${var.app_name}-dev-task"

  container_definitions = <<DEFINITION
  [
    {
      "name": "${var.app_name}-${var.app_environment}-container",
      "image": "${var.docker_image}",
      "environment": ${data.template_file.env_vars.rendered},
      "essential": true,
      "mountPoints": [
        {
          "readOnly": false,
          "containerPath": "/home/src",
          "sourceVolume": "${var.app_name}-fs"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "${aws_cloudwatch_log_group.log-group.id}",
          "awslogs-region": "${var.aws_region}",
          "awslogs-stream-prefix": "${var.app_name}-${var.app_environment}"
        }
      },
      "portMappings": [
        {
          "containerPort": 6789,
          "hostPort": 6789
        }
      ],
      "cpu": ${var.ecs_task_cpu},
      "memory": ${var.ecs_task_cpu},
      "networkMode": "awsvpc"
    }
  ]
  DEFINITION

  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  memory                   = var.ecs_task_memory
  cpu                      = var.ecs_task_cpu
  execution_role_arn       = aws_iam_role.ecsTaskExecutionRole.arn
  task_role_arn            = aws_iam_role.ecsTaskExecutionRole.arn

  volume {
    name = "${var.app_name}-fs"

    efs_volume_configuration {
      file_system_id     = aws_efs_file_system.file_system.id
      transit_encryption = "ENABLED"
    }
  }

  tags = {
    Name        = "${var.app_name}-ecs-td"
    Environment = var.app_environment
  }

  depends_on = [aws_lambda_function.terraform_lambda_func]
}

data "aws_ecs_task_definition" "main" {
  task_definition = aws_ecs_task_definition.manager-task.family
}

data "aws_ecs_task_definition" "dev" {
  task_definition = aws_ecs_task_definition.dev-task.family
}

resource "aws_ecs_service" "aws-ecs-service" {
  name                 = "${var.app_name}-${var.app_environment}-ecs-service"
  cluster              = aws_ecs_cluster.aws-ecs-dev-cluster.id
  task_definition      = "${aws_ecs_task_definition.manager-task.family}:${max(aws_ecs_task_definition.manager-task.revision, data.aws_ecs_task_definition.main.revision)}"
  launch_type          = "FARGATE"
  scheduling_strategy  = "REPLICA"
  desired_count        = 1
  force_new_deployment = true

  network_configuration {
    subnets          = aws_subnet.public.*.id
    assign_public_ip = true
    security_groups = [
      aws_security_group.service_security_group.id,
      aws_security_group.load_balancer_security_group.id
    ]
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.target_group.arn
    container_name   = "${var.app_name}-${var.app_environment}-container"
    container_port   = 6789
  }

  depends_on = [aws_lb_listener.listener]
}

resource "aws_security_group" "service_security_group" {
  vpc_id = aws_vpc.aws-vpc.id

  ingress {
    from_port   = 6789
    to_port     = 6789
    protocol    = "tcp"
    cidr_blocks = ["${chomp(data.http.myip.response_body)}/32"]
    security_groups = [aws_security_group.load_balancer_security_group.id]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name        = "${var.app_name}-service-sg"
    Environment = var.app_environment
  }
}

