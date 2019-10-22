const { addFragmentToInfo } = require('graphql-binding')
const { forwardTo } = require('prisma-binding')

function personsQuery(parent, args, ctx, info) {

  args.filter ?
    where = {
      where:
      {
        name: args.filter.name,
        githubAccount: args.filter.githubAccount,
        blog: args.filter.blog
      }
    } : where = {}

  const fragment = `fragment EnsureCity on Person { talks { conferences { city } } }`
  return ctx.db.query.persons(where, addFragmentToInfo(info, fragment))
}

function talksQuery(parent, args, ctx, info) {

  args.filter ?
    where = {
      where: {
        title_contains: args.filter.title,
        summary_contains: args.filter.summary
      }
    } : where = {}

  const fragment = `fragment EnsureCity on Talk { conferences { city } }`
  return ctx.db.query.talks(where, addFragmentToInfo(info, fragment))
}


function conferencesQuery(parent, args, ctx, info) {
  args.filter ?
    where = {
      where:
      {
        name_contains: args.filter.name,
        city_contains: args.filter.city
      }
    } : where = {}

  const fragment = `fragment EnsureCity on Conference { city }`
  return ctx.db.query.conferences(where, addFragmentToInfo(info, fragment))
}

const Query = {
  persons(parent, args, ctx, info) {
    return personsQuery(parent, args, ctx, info)
  },
  person(parent, args, ctx, info) {
    const fragment = `fragment EnsureCity on Person { talks { conferences { city } } }`
    return ctx.db.query.person({ where: { id: args.id } }, addFragmentToInfo(info, fragment))
  },
  talks(parent, args, ctx, info) {
    return talksQuery(parent, args, ctx, info)
  },
  talk(parent, args, ctx, info) {
    const fragment = `fragment EnsureCity on Talk { conferences { city } }`
    return ctx.db.query.talk({ where: { id: args.id } }, addFragmentToInfo(info, fragment))
  },
  conferences(parent, args, ctx, info) {
    return conferencesQuery(parent, args, ctx, info)
  },
  conference(parent, args, ctx, info) {
    const fragment = `fragment EnsureCity on Conference { city }`
    return ctx.db.query.conference({ where: { id: args.id } }, addFragmentToInfo(info, fragment))
  },
  // city(parent, args, ctx, info) {
  //   return ctx.dbcity.query.city({ where: { id: args.id } })
  // },
  city: forwardTo('dbcity')
}

module.exports = Query
