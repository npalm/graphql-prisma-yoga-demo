const { Prisma } = require('prisma-binding')

const dbcity = new Prisma({
  typeDefs: '../prisma-city/generated/schema.graphql',
  endpoint: process.env.PRISMA_ENDPOINT_2,
  debug: false,
})

module.exports = dbcity
