![project status](https://img.shields.io/badge/status-demo-orange.svg)

# GraphQL Yoga demo

This example demonstrates how to use GraphQL Yoga and GraphQL Prisma to create a customized schema. The examples shows how you can combine two different domain iin one schema. The schema is based on the schema used in the [Java demo](https://github.com/npalm/graphql-java-demo).

## Usages

### Required software
- Node 10
- docker and docker-composse
- yarn


### Start prisma backend.

Ensure you close this repo with sub modules. Otherwise run the command. To get the Git repo with the prisma mackend.
```
git submodule update --init --recursive
```

Stat the prisma backend and load data.

```
cd prisma
yarn
docker-compuse up -d
yarn run deploy-talks
yarn run deploy-cities
cd ..
```

### Start yoga

```
yarn && yarn start 
```