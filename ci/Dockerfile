ARG REGISTRY_HOST
ARG APP_NAME
ARG BASE_IMAGE_VERSION

FROM ${REGISTRY_HOST}/${APP_NAME}:base-${BASE_IMAGE_VERSION}

ARG NPM_AUTH_TOKEN

# Bundle app source code
COPY --chown=node . ./
RUN npm ci && npm run build
RUN rm -f .npmrc

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "." ]
