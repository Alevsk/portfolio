.PHONY: help install dev build preview format format-check test test-coverage clean docker-build docker-build-push docker-build-push-parallel docker-run docker-run-bg docker-stop docker-clean docker-logs docker-shell

# Variables
IMAGE_NAME = alevsk/portfolio
CONTAINER_NAME = portfolio
HOST_PORT = 8080
CONTAINER_PORT = 8080
BUILD_VERSION := $(shell git describe --exact-match --tags $$(git log -n1 --pretty='%h') 2>/dev/null || git rev-parse --abbrev-ref HEAD 2>/dev/null)
BUILD_TIME := $(shell date -u +%Y-%m-%dT%H-%M-%SZ 2>/dev/null)

# Default target
help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-25s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# Development targets
install: ## Install dependencies
	yarn install

dev: ## Start development server on port 3000
	yarn dev

build: ## Build for production
	yarn build

preview: ## Preview production build locally
	yarn preview

# Code quality targets
format: ## Format code with Prettier
	yarn prettier --write . --loglevel warn

format-check: ## Check code formatting without making changes
	yarn prettier --check .

# Testing targets
test: ## Run tests with Vitest
	yarn test

test-coverage: ## Run tests with coverage report
	yarn test --coverage

# Cleanup targets
clean: ## Remove build artifacts and dependencies
	rm -rf build node_modules coverage .vite

# Docker targets
docker-build: ## Build Docker image for local architecture
	docker build -t $(IMAGE_NAME):$(BUILD_VERSION)-dev \
		--build-arg build_version=$(BUILD_VERSION) \
		--build-arg build_time='$(BUILD_TIME)' .

docker-build-multiarch: ## Build multi-arch Docker image (amd64, arm64) locally
	docker buildx build --platform linux/amd64,linux/arm64 \
		-t $(IMAGE_NAME):$(BUILD_VERSION)-dev \
		--build-arg build_version=$(BUILD_VERSION) \
		--build-arg build_time='$(BUILD_TIME)' \
		--load .

docker-build-push: ## Build and push multi-arch image to registry (sequential)
	@echo "Building for linux/amd64..."
	@docker buildx build --platform linux/amd64 \
		-t $(IMAGE_NAME):amd64 \
		--build-arg build_version=$(BUILD_VERSION) \
		--build-arg build_time='$(BUILD_TIME)' \
		--push .
	@echo "Building for linux/arm64..."
	@docker buildx build --platform linux/arm64 \
		-t $(IMAGE_NAME):arm64 \
		--build-arg build_version=$(BUILD_VERSION) \
		--build-arg build_time='$(BUILD_TIME)' \
		--push .
	@echo "Creating and pushing multi-arch manifest..."
	@docker buildx imagetools create -t $(IMAGE_NAME):latest \
		$(IMAGE_NAME):amd64 \
		$(IMAGE_NAME):arm64
	@docker buildx imagetools create -t $(IMAGE_NAME):RELEASE.$(BUILD_TIME) \
		$(IMAGE_NAME):amd64 \
		$(IMAGE_NAME):arm64
	@echo "Multi-arch image pushed successfully"

docker-build-push-parallel: ## Build and push multi-arch image in parallel
	docker buildx build --platform linux/amd64,linux/arm64 \
		-t $(IMAGE_NAME):latest \
		-t $(IMAGE_NAME):RELEASE.$(BUILD_TIME) \
		--build-arg build_version=$(BUILD_VERSION) \
		--build-arg build_time='$(BUILD_TIME)' \
		--push .

docker-run: ## Run Docker container on port $(HOST_PORT)
	@docker run --rm -p $(HOST_PORT):$(CONTAINER_PORT) $(IMAGE_NAME):$(BUILD_VERSION)-dev

docker-run-bg: ## Run Docker container in background
	@docker run -d --name $(CONTAINER_NAME) -p $(HOST_PORT):$(CONTAINER_PORT) $(IMAGE_NAME):$(BUILD_VERSION)-dev
	@echo "Container started in background"
	@echo "Access at http://localhost:$(HOST_PORT)"
	@echo "Stop with: make docker-stop"

docker-stop: ## Stop and remove running container
	@docker stop $(CONTAINER_NAME) 2>/dev/null || true
	@docker rm $(CONTAINER_NAME) 2>/dev/null || true
	@echo "Container stopped and removed"

docker-clean: docker-stop ## Remove container and Docker image
	@docker rmi $(IMAGE_NAME):$(BUILD_VERSION)-dev 2>/dev/null || true
	@docker rmi $(IMAGE_NAME):latest 2>/dev/null || true
	@echo "Images removed"

docker-logs: ## View container logs
	@docker logs -f $(CONTAINER_NAME)

docker-shell: ## Open shell in running container
	@docker exec -it $(CONTAINER_NAME) sh
