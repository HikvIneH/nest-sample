<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  <p align="center">
    <a href="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=coverage" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=coverage" alt="Coverage" /></a>
    <a href="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=sqale_rating" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=sqale_rating" alt="Maintainability Rating" /></a>
    <a href="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=alert_status" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=alert_status" alt="Quality Gate" /></a>
    <a href="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=code_smells" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=HikvIneH_nest-fastify&metric=code_smells" alt="Code Smells" /></a>  

  </p>
</p>


## Features
GET
```
/temperature/convert?scale={fahrenhei / celcius}&degrees={ number }
```

- Continuous Integration
- Sonar checker for clean code
- Cache with in memory or redis

## Prerequisites
- Nodejs >= 10.13.0, except for v13
- Redis (Optional)
- Github account (Optional for CI)
- AWS & Serverless.com account if you deploy to lambda using serverless
- Heroku account if you deploy to heroku


## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn serve

# production mode
$ yarn serve:prod
```
## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Deployment

### Prerequisites
- AWS account & serverless account / heroku account
- Node.js
- yarn

This project can be deployed into serverless framework or heroku from Github actions

## Heroku Deployment

Mac
```bash
$ brew install heroku/brew/heroku
```

Linux 
```bash
#  Ubuntu but should be available on other distro
$ sudo snap install heroku --classic
```

#### Login & create heroku instance
```bash
#  Will prompt web login
$ Heroku login
```


#### Deployment
```bash
# In the directory of this project
$ git checkout main
```

```bash
$ git push heroku main
```

```bash
# Check at least 1 heroku instance is running
$ heroku ps:scale web=1
```

```bash
$ heroku open
```

## Serverless with AWS Lambda

### Preparation
```bash
$ yarn
```

### Serverless preparation
[Serverless Account](https://www.serverless.com/framework/docs/providers/aws/cli-reference/login)
[Check for AWS Creds](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

Make sure to have the correct AWS profile in your local machine
It should look like this
```
[default]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```
If you want to use other profile than default you have to update the provider.profile on serverless.yml

Lambda will run on handler.ts since it needs support for aws-sdk

#### Login to serverless
```bash
$ serverless login
```
or 
```bash
$ export SERVERLESS_ACCESS_KEY=xxx
```
### Deploy
```bash
$ yarn deploy:dev
```


