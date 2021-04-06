FROM node:10-slim

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

ARG NPM_AUTH_TOKEN

# Bundle app source code
COPY --chown=node . ./
RUN npm ci && npm run build
RUN rm -f .npmrc

CMD [ "node", "." ]
