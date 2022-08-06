# Sets the build version based on the output of the following command, if we are building for a tag, that's the build else it uses the current git branch as the build
BUILD_VERSION:=$(shell git describe --exact-match --tags $(git log -n1 --pretty='%h') 2>/dev/null || git rev-parse --abbrev-ref HEAD 2>/dev/null)
BUILD_TIME:=$(shell date 2>/dev/null)
TAG ?= "alevsk/portfolio:$(BUILD_VERSION)-dev"

default: build-static

build-static:
	@echo "Building frontend static assets to 'build'"
	NODE_OPTIONS=--openssl-legacy-provider yarn build

test-warnings:
	./check-warnings.sh

test-prettier:
	./check-prettier.sh

prettify:
	yarn prettier --write . --loglevel warn

docker:
	@docker build --output=type=docker --platform linux/amd64 -t $(TAG) --build-arg build_version=$(BUILD_VERSION) --build-arg build_time='$(BUILD_TIME)' .