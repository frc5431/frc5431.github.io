ARG NODE_VERSION=24.2.0

FROM node:${NODE_VERSION} AS build

WORKDIR /usr/src/app/frontend

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV DOCKER=true

RUN npm run build