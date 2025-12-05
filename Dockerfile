# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source and build
COPY . .
RUN yarn build

# Production stage
FROM docker.io/library/nginx:1.27-alpine

LABEL maintainer="Lenin Alevski <lenin@alevsk.com>"
LABEL org.opencontainers.image.source="https://github.com/alevsk/alevsk.dev"
LABEL org.opencontainers.image.description="Lenin Alevski Portfolio"

ARG build_version
ARG build_time

LABEL org.opencontainers.image.version="${build_version}"
LABEL org.opencontainers.image.created="${build_time}"

EXPOSE 8080

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

USER nginx

CMD ["nginx", "-g", "daemon off;"]
