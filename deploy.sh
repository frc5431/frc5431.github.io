#!/usr/bin/env bash
# insp by https://www.youtube.com/watch?v=jFrGhodqC08&t=617s

set -euo pipefail  # Exit on error, undefined vars, pipe failures

git pull

BUILD_VERSION=$(git rev-parse HEAD)

echo "$(date): Releasing new server version. $BUILD_VERSION"

echo "$(date): Running build..."

docker compose rm -f
docker compose build

echo "$(date): Starting up..."
docker compose up -d
