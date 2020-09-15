const { Command } = require('discord.js-commando')
const { default: getInsult } = require('insults')

class GoodBot extends Command {
  constructor(client) {
    super(client, {
      name: 'goodbot',
      group: 'other',
      memberName: 'goodbot',
      description: 'Compliment the bot'
    })
  }

  async run({ channel }) {
    channel.send(getInsult())
  }
}

module.exports = GoodBot