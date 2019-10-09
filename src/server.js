const { GraphQLServer } = require('graphql-yoga')

const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
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
      Conference: {
        location(parent, args, ctx, info) {
          return ctx.dbcity.query.city({ where: { name: parent.city } }, info)
        },
      },
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db, dbcity }),
  })
}

module.exports = createServer
