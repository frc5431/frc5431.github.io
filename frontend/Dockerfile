ARG NODE_VERSION=24.2.0

FROM node:${NODE_VERSION} AS build
WORKDIR /usr/src/app/frontend

COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm ci

COPY ./frontend .

ENV DOCKER=true

RUN npm run build

FROM caddy:2-alpine AS serve
COPY --from=build /usr/src/app/frontend/dist /srv/frontend
EXPOSE 80 443