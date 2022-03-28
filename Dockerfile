FROM node:14.17.6-alpine3.14

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

EXPOSE 3000
