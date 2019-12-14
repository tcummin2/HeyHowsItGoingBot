const { Command } = require('discord.js-commando')
const config = require('../../config.json')

class Request extends Command {
  constructor(client) {
    super(client, {
      name: 'request',
      group: 'other',
      memberName: 'request',
      description: 'Request a feature for the bot'
    })
  }

  async run({ member, channel, client }, args) {
    client.fetchUser(config.ownerId).then(user => {
      user.send(`Request from ${member.user.username}: ${args}`)
    })

    channel.send('Your feature request has been sent to the bot owner.')
  }
}

module.exports = Request