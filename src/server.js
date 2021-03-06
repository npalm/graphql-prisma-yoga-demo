const { GraphQLServer } = require('graphql-yoga')

const Mutation = require('./resolvers/Mutation')
const { Query, Conference } = require('./resolvers/Query')
const Subscription = require('./resolvers/Subscription')
const db = require('./db')
const dbcity = require('./citydb')

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
      Subscription,
      Conference
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db, dbcity }),
  })
}

module.exports = createServer
