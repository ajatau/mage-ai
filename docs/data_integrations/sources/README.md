# Sources

A source is a system that you want to load data from and synchronize it into another system.
A source can be a 3rd party API, SaaS, database, data warehouse, or a data lake.

## Singer spec

Mage uses the data engineering community standard for data integrations called the
[Singer spec](https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md).

In addition,
Mage further standardizes the spec and provides common classes and methods to make implementing them easier and faster.

## Folder structure

Sources are defined in the `mage_integrations/sources/` directory.

All sources should be a subclass of the `Source` class defined in
`mage_integrations/sources/base.py`.
