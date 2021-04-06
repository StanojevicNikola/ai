# Jenkins stuff

Jenkins is using some of the content of this folder to cook docker images and run tests
against it in controlled testing environment. The same image after
successfull testing is pushed to registry and used in production.

Building and running the app with accompanying services is handled through docker-compose.yml.

## Docker Image

Is built in two stages to speed up the build, test and deploy process.

Firt stage of the build is done using Dockerfile.base and resulting image is called "base image".
It contains all dependencies including app libraries but without actual code.
Base image is than pushed to registry and is used for all following builds
of the same app to reduce the build time.

**To trigger new base image build edit .env file in ci directory and increment/change the BASE_IMAGE_VERSION.**

Second stage is built with Dockerfile on top of the base image by adding complete code and running installation of the app libraries again.

## Tests

After final image is built app, test environment is created according to
docker-compose.yml. Then run_test.sh is run.

## Building new base image

- Edit .env and increment BASE_IMAGE_VERSION
- Push to CI
