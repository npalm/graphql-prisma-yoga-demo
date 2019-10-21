const { Prisma } = require('prisma-binding')

const db = new Prisma({
  typeDefs: './prisma/talks/generated/schema.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: false,
})

module.exports = db
