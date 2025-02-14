# Table of contents

* [Overview](README.md)
  * [Features](docs/features/README.md)
    * [Data pipeline management](docs/features/orchestration/README.md)
  * Concepts
    * [Core abstractions](docs/core/abstractions.md)
    * [Core design principles](docs/core/design\_principles.md)
    * [Blocks](docs/blocks/README.md)
      * [Data loading](docs/blocks/data\_loading.md)
    * [Actions](docs/actions/README.md)
      * [Transformer actions](docs/actions/transformer\_actions/README.md)
  * [Use cases](docs/use\_cases/README.md)
* [Documentation](docs/README.md)
  * Quick start
    * [Setup and install](docs/tutorials/quick\_start/setup.md)
    * [Load, transform, and export restaurant data](docs/tutorials/quick\_start/etl\_restaurant/README.md)
      * [Use a completed pipeline](docs/tutorials/quick\_start/etl\_restaurant/use\_completed\_pipeline.md)
    * [Train model on Titanic dataset](docs/tutorials/quick\_start/train\_titanic\_model/README.md)
      * [Use a completed pipeline](docs/tutorials/quick\_start/train\_titanic\_model/use\_completed\_pipeline.md)
  * [Tutorials](docs/tutorials/README.md)
    * [Set up DBT models & orchestrate DBT runs](docs/tutorials/dbt/quick\_start.md)
    * [Integrate Mage into an existing Airflow project](docs/tutorials/airflow/integrate\_into\_existing\_project/README.md)
    * [Clean](docs/tutorials/clean.md)
    * [Data cleaning aka data cleansing](docs/tutorials/data\_cleaning.md)
    * [Data cleaning workflow](docs/tutorials/data\_cleaning\_workflow.md)
    * [Using the tool from end-to-end](docs/tutorials/quick-start.md)
  * Guides
    * Blocks
      * [R blocks](docs/guides/blocks/R.md)
      * [SQL blocks](docs/guides/blocks/SQL.md)
      * [Sensors: blocks depending on external pipelines](docs/guides/blocks/Sensors.md)
    * Pipelines
      * [How to build a data integration pipeline](docs/guides/pipelines/DataIntegrationPipeline.md)
      * [Streaming pipeline](docs/guides/pipelines/StreamingPipeline.md)
    * Data loader
        * [Load data from S3](docs/tutorials/guides/data\_loader/s3.md)
    * Data exporter
        * [Export data to S3](docs/tutorials/guides/data\_exporter/s3.md)
    * Triggers
      * [Schedule pipelines to run periodically](docs/tutorials/triggers/schedule.md)
      * Events
        * [Trigger pipeline from AWS Event](docs/tutorials/triggers/events/aws.md)
    * DBT
      * [Add an existing DBT project to Mage](docs/guides/dbt/add\_existing\_project.md)
      * [DBT connection profiles](docs/guides/dbt/connection\_profiles.md)
      * [DBT sources and upstream dependencies](docs/guides/dbt/dependencies.md)
      * [Run a single model](docs/guides/dbt/run\_model.md)
      * [Run selected models (and optionally exclude others)](docs/guides/dbt/run\_models.md)
      * [Running DBT tests](docs/guides/dbt/tests.md)
    * Version control
      * [Setting up Git on cloud](docs/guides/version\_control/Git.md)
  * [Data integrations](docs/data\_integrations/README.md)
    * [Sources](docs/data\_integrations/sources/README.md)
      * [Adapt an existing source](docs/guides/data\_integrations/sources/AdaptExistingSource.md)
      * [Add a new source](docs/guides/data\_integrations/sources/AddNewSource.md)
    * [Destinations](docs/data\_integrations/destinations/README.md)
      * [Adapt an existing destination](docs/guides/data\_integrations/destinations/AdaptExistingDestination.md)
      * [Add a new destination](docs/guides/data\_integrations/destinations/AddNewDestination.md)
    * [Mage integrations](mage\_integrations/README.md)
      * Sources
        * [Schema](mage\_integrations/mage\_integrations/sources/README.md)
        * [Amplitude](mage\_integrations/mage\_integrations/sources/amplitude/README.md)
        * [BigQuery](mage\_integrations/mage\_integrations/sources/bigquery/README.md)
        * [Google Search Console](mage\_integrations/mage\_integrations/sources/google\_search\_console/README.md)
        * [Google Sheets](mage\_integrations/mage\_integrations/sources/google_sheets/README.md)
        * [Intercom](mage\_integrations/mage\_integrations/sources/intercom/README.md)
        * [MySQL](mage\_integrations/mage\_integrations/sources/mysql/README.md)
        * [PostgreSQL](mage\_integrations/mage\_integrations/sources/postgresql/README.md)
        * [Redshift](mage\_integrations/mage\_integrations/sources/redshift/README.md)
        * [Salesforce](mage\_integrations/mage\_integrations/sources/salesforce/README.md)
          * [Client](mage\_integrations/mage\_integrations/sources/salesforce/client/README.md)
            * [Blacklisted Objects Explanation](mage\_integrations/mage\_integrations/sources/salesforce/client/Blacklisting.md)
            * [Changelog](mage\_integrations/mage\_integrations/sources/salesforce/client/CHANGELOG.md)
        * [Stripe](mage\_integrations/mage\_integrations/sources/stripe/README.md)
      * Destinations
        * [BigQuery](mage\_integrations/mage\_integrations/destinations/bigquery/README.md)
        * [MySQL](mage\_integrations/mage\_integrations/destinations/mysql/README.md)
        * [PostgreSQL](mage\_integrations/mage\_integrations/destinations/postgresql/README.md)
        * [Redshift](mage\_integrations/mage\_integrations/destinations/redshift/README.md)
        * [Snowflake](mage\_integrations/mage\_integrations/destinations/snowflake/README.md)
      * Connections
        * [Example Amplitude connection](mage\_integrations/mage\_integrations/connections/amplitude/README.md)
        * [Google Analytics](mage\_integrations/mage\_integrations/connections/google\_analytics/README.md)
        * [PostgreSQL](mage\_integrations/mage\_integrations/connections/postgresql/README.md)
  * Code block integrations
    * [BigQuery](docs/integrations/BigQuery.md)
    * [MySQL](docs/integrations/MySQL.md)
    * [PostgreSQL](docs/integrations/PostgreSQL.md)
    * [Redshift](docs/integrations/Redshift.md)
    * [S3](docs/integrations/S3.md)
    * [Snowflake](docs/integrations/Snowflake.md)
  * [Kernels](docs/kernels/README.md)
  * Development
    * [Multi-development environment in the cloud](docs/development/multi\_development\_environment/README.md)
  * Production
    * [Run pipeline in Airflow](docs/production/airflow.md)
    * [Compute Resource](docs/production/compute\_resource.md)
    * [Run pipeline in Prefect](docs/production/prefect.md)
    * [Runtime Variables](docs/production/runtime\_variables.md)
  * [Testing](docs/testing/README.md)
  * Triggers
    * [Triggering pipeline via API request](docs/triggers/api.md)
  * Deploy
    * [AWS](docs/deploy/aws/README.md)
    * [CI/CD](docs/deploy/ci_cd/README.md)
    * [Terraform](docs/deploy/terraform/README.md)
      * [Terraform Amazon Web Services (AWS)](docs/deploy/terraform/AWS.md)
        * [Terraform AWS resources](docs/deploy/terraform/AWS/Resources.md)
      * [Terraform Microsoft Azure](docs/deploy/terraform/Azure.md)
        * [Terraform Azure resources](docs/deploy/terraform/Azure/Resources.md)
      * [Terraform Google Cloud Platform (GCP)](docs/deploy/terraform/GCP.md)
        * [Terraform GCP resources](docs/deploy/terraform/GCP/Resources.md)
  * Observability
    * Alerting
      * [Email](docs/observability/alerting/Email.md)
      * [Slack](docs/observability/alerting/Slack.md)
    * [Monitoring](docs/observability/monitoring/README.md)
  * [DBT](docs/dbt/README.md)
  * [Spark](docs/spark/setup/README.md)
  * [Frontend](mage\_ai/frontend/README.md)
  * [Running the server](mage\_ai/server/README.md)
  * [Database migrations](mage\_ai/orchestration/db/migrations/README.md)
* [Contributing](docs/contributing/README.md)
    * [Contributing guide](docs/contributing/data\_cleaner/README.md)
    * [Jupyter](docs/contributing/jupyter.md)
    * [Testing](docs/contributing/testing.md)
    * [Adding a chart](docs/contributing/charts/how\_to\_add.md)
