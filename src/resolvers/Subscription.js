const Subscription = {
  comments: {
    subscribe: (parent, args, ctx, info) => {
      //const selectionSet = `{ node { comment } }`
      return ctx.db.subscription.comment({},
        info,
      )
    }
    // resolve: (payload, args, context, info) => {
    //   return payload.node
    // },
  },
}

module.exports = Subscription
