const Mutations = {
  addPerson(parent, args, ctx, info) {
    data = {
      data: {
        name: args.person.name,
        githubAccount: args.person.githubAccount,
        blog: args.person.blog
      }
    }
    return ctx.db.mutation.createPerson(data, info)
  },
  addSpeakerToTalk(parent, args, ctx, info) {

    data = {
      where: { id: args.talkId },
      data: {
        speakers: {
          connect: { id: args.speakerId }
        }
      }
    }
    return ctx.db.mutation.updateTalk(data, info)
  }
}

module.exports = Mutations
