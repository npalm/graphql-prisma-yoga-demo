require('dotenv').config({ path: '.env' })

const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const db = require('./db')
const createServer = require('./server')

const server = createServer()

server.start(() => console.log(`The server is running on http://localhost:4000`))