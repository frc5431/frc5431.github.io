ARG NODE_VERSION=24.2.0

# --------- Stage 1: Build ---------
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app/backend

# Copy package files first for caching
COPY package.json package-lock.json ./

# Install all dependencies including dev for build step
RUN npm ci

# Copy source files
COPY . .

# Build TS to JS in /dist
RUN npm run build


# --------- Stage 2: Production ---------
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app/backend

# Copy only package files to install prod dependencies
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy compiled JS from build stage
COPY --from=build /usr/src/app/backend/dist ./dist

# Use non-root user for security
USER node

# Expose port your app listens on
ENV PORT=${PORT}
EXPOSE ${PORT}

# Run the compiled app
CMD ["node", "dist/server.js"]
