# Deployment Guide

## Deployment workflow

1. Set up environment variables using environment file (_.env_) or other methods.</br>
   _.env.sample_ file contains basic setup for working in local environment.</br>
   -> [Environment variables](./ENV_VARIABLES.md)

2. Build Docker image:

   ```
   docker build -t fbl-user-service -f docker/Dockerfile . --build-arg NPM_AUTH_TOKEN=
   ```

   _NPM_AUTH_TOKEN_ is build variable used for accessing our private GitHub packages.</br>
   It can be generated from GitHub.

3. Run:

   ```
   docker run --network footballerista-net -p 3000:3000 --name fbl-user-service fbl-user-service
   ```

   !_Note_ Set up ports according to _PORT_ environment variable and network setup.

## Additional commands:

1. Run tests:

   ```
   npm test
   ```

2. Run migrations:

   ```
   npm run migrate
   ```
