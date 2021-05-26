#!/bin/sh

# yarn --cwd ./icons build
yarn --cwd ./packages/system build
yarn --cwd ./packages/box build
yarn --cwd ./packages/flex build
yarn --cwd ./packages/card build
yarn --cwd ./packages/icon build
yarn --cwd ./packages/text build
yarn --cwd ./packages/avatar build
yarn --cwd ./packages/hint build
yarn --cwd ./packages/checkbox build
yarn --cwd ./packages/button build
yarn --cwd ./packages/input build
yarn --cwd ./packages/theme build
