# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.2.0

# Stage 1: Build the frontend app
FROM node:${NODE_VERSION} AS build

WORKDIR /usr/src/app/frontend

# Copy package files and install dependencies (cache layer)
COPY package.json package-lock.json ./
RUN npm ci

# Copy all source files
COPY . .


ENV DOCKER=true

# Build your app with the injected env var
RUN npm run build

# Stage 2: Serve the built app with a lightweight server
FROM node:${NODE_VERSION} AS serve

WORKDIR /usr/src/app/frontend

# Install serve globally to serve static files
RUN npm install -g serve

# Copy built files from build stage
COPY --from=build /usr/src/app/frontend/dist ./dist

# Expose the port serve will use
ARG PORT=3000
ENV PORT=$PORT

EXPOSE ${PORT}

# Start serving the static files
CMD serve -s dist -l $PORT