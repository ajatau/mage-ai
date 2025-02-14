# Compute Resource

Follow the instructions in this [doc](../deploy/terraform/README.md) to deploy Mage tool to production environment. When running the Mage tool in production, you can customize the compute resource in the following ways:

## 1. Customize the compute resource of the Mage web service

Mage web serivce is responsbile for running Mage web backend, scheduler service and local block executions. You can customize the CPU and memory of the Mage web service by updating the Terraform variables and then running `terraform apply`
- AWS: Update the `ecs_task_cpu` and `ecs_task_memory` variables in the [`mage-ai/scripts/deploy/terraform/aws/variables.tf`](https://github.com/mage-ai/mage-ai/blob/master/scripts/deploy/terraform/aws/variables.tf) file.
- GCP (coming soon)


## 2. Customize the compute resource of the Mage executor

Mage provides multiple executors to execute blocks.

### Local python executor
Local python exeuctors are running within the same container of Mage web service. You can customize the compute resource with the same way mentioned in the [Customize the compute resource of the Mage web service](#customize-the-compute-resource-of-the-mage-web-service) section.

### ECS executor
You can choose to launch separate AWS ECS tasks to executor blocks by specifying block executor_type to be "ecs" in pipeline's metadata.yaml file.

To customize the compute resource of ECS executor, you can update `cpu` and `memory` the `ecs_config` in project's metadata.yaml file.

Example config:
```yaml
ecs_config:
  cpu: 1024
  memory: 2048
```

### PySpark executor
If the pipeline type is "pyspark", we use PySpark exeuctors for pipeline and block executions. You can customize the compute resource of PySpark exeuctor by updating the instance types of `emr_config` in project's metadata.yaml file.

Example config:
```yaml
emr_config:
  ec2_key_name: 'xxxxx'
  master_instance_type: 'r5.2xlarge'
  slave_instance_type: 'r5.2xlarge'
```
