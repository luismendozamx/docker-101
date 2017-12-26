# Set the base image
FROM node:8.9-alpine

# Set environment variables
ENV NPM_CONFIG_LOGLEVEL=warn

# Create app dir and install dependencies
RUN mkdir -p /app \
    && apk update \
    && apk add --no-cache git

# Copy package.json & yarn.lock
COPY package.json yarn.lock /app/node_api/

# Run yarn install
WORKDIR /app/node_api
RUN yarn install

# Copy files
COPY . /app/node_api

CMD ["yarn", "start"]