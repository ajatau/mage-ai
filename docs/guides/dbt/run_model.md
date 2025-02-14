# Run a single model

1. Under the data loader block you just added, click the button <b>`DBT model`</b>,
then click the option `Single model`.
1. In the file browser that pops up,
click the file of the DBT model you want to add to your pipeline.
1. In the `DBT profile target` input field, enter the name of the DBT connection profile
(e.g. `dev`) that you want to use when running the selected DBT models.

![](https://github.com/mage-ai/assets/blob/main/dbt/add-dbt-model.gif?raw=true)

<br />

## Depending on upstream blocks

If your DBT model references other models,
those models will also be added to the current pipeline as upstream blocks.

Once you’ve added 1 or more DBT models to your pipeline,
you can set its dependencies on other blocks.

The DBT model won’t run until all upstream blocks have successfully been completed.

<br />

## Preview DBT model results

You can run a DBT model block and see the results of the SQL query.

Under the hood, Mage is running [`dbt compile`](https://docs.getdbt.com/reference/commands/compile)
for that single model, then executing the compiled SQL query in the data source from
your DBT project’s [connection profile](https://docs.getdbt.com/docs/get-started/connection-profiles) target.

![](https://github.com/mage-ai/assets/blob/main/dbt/dbt-preview.gif?raw=true)

<br />

## Pipeline execution run

When pipeline is triggered and executes,
it’ll run each DBT model block using the
[`dbt run`](https://docs.getdbt.com/reference/node-selection/syntax) command.

<br />

## Variable interpolation

You can add [variables](../../production/runtime_variables.md) specific to your pipeline.
These variables are accessible in each block of your pipeline.

In addition, all the environment variables are accessible within the SQL query
using the `var` syntax.

| Syntax | Description | Example |
| --- | --- | --- |
| `{{ var('...') }}` | Get a value from the environment variables or runtime variables. | `{{ var('ds') }}` |

### SQL statement

Within the SQL query in a DBT model block, you can access these variables using the `var` syntax.
To learn more, read [DBT’s documentation](https://docs.getdbt.com/reference/dbt-jinja-functions/var).
For example:

```SQL
SELECT *
FROM users_v1
WHERE created_at >= '{{ var("ds") }}'
```

In the above example, the variable named `ds` is defined as part of the runtime variables
for the pipeline.

<br />
