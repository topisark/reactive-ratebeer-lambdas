# Reactive Ratebeer Lambdas

![alt text](https://circleci.com/gh/topisark/reactive-ratebeer-lambdas.png?&style=shield "CircleCI status")

Backend for Ratebeer utilizing AWS Lambdas with [Serverless](https://github.com/serverless/serverless) and a PostgreSQL database hosted by AWS RDS.

Test: `yarn test`. Tests are run against a test database. The connection string should be set as env var `DATABASE_URL` before running the tests, for example `postgres://user:password@host:port/database`.

Deploy: `yarn deploy`. Requires AWS credentials to be configured for Serverless, [see docs](https://serverless.com/framework/docs/providers/aws/guide/credentials/). Serverless reads `env.json` (gitignored) in project root and imports the contents as env vars. Requires `DATABASE_URL` to be set.

Also includes migrations to create required tables: `yarn migrate`. `DATABASE_URL` needs to be set, as always.

[Continous integration on CircleCI.](https://circleci.com/gh/topisark/reactive-ratebeer-lambdas)

[Frontend project on GitHub.](https://github.com/topisark/reactive-ratebeer)
