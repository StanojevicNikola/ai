# Development Guide

## VSCode setup

Install the following extensions:

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Local Development workflow

### Requirements:

- Have Docker and docker-composed installed or
- Node, npm, Postgres, Redis
- Firebase service account where required

### Setup for local development:

1. Set up environment files (_.env_).</br>
   _.env.sample_ file contains basic setup for working in local environment.</br>
   -> [Environment variables](./ENV_VARIABLES.md)

2. You can run all required services locally (like Postgres, Redis) using Docker:

   ```
   npm run docker:services:start
   ```

   or

   ```
   make docker-services-start
   ```

   Don't forget to update _.env_ files with information according to your services setup.

### Run all application services for local development using Docker:

1. Build monorepo image:

   ```
   npm run docker:dev:build
   ```

   or

   ```
   make docker-dev-build
   ```

2. Build and start application services:

   ```
   npm run docker:dev:start
   ```

   or

   ```
   make docker-dev-start
   ```

### Run all application services for local development without using Docker:

1. Install all dependencies:

   ```
   npm i
   ```

2. Build all application services and packages:

   ```
   npm run build
   ```

3. Start all application services:

   ```
   npm run start:dev
   ```
