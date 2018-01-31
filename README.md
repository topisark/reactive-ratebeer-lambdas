# Reactive Ratebeer Lambdas

Backend for Ratebeer utilizing AWS Lambdas with [Serverless](https://github.com/serverless/serverless) and a PostgreSQL database.

Test: `yarn test`. Tests are run against a test database. The connection string should be set as env var `DATABASE_URL` before running the tests.

Deploy: `yarn deploy`. Deployment runs tests so the same `DATABASE_URL` env var should be set. AWS credentials also need to be configured for Serverless, [see docs](https://serverless.com/framework/docs/providers/aws/guide/credentials/).