const { Command } = require('discord.js-commando')

class Stop extends Command {
  constructor(client) {
    super(client, {
      name: 'heystop',
      group: 'text',
      memberName: 'heystop',
      description: 'Stop the music'
    })
  }

  async run(message, args) {
    var server = servers[message.guild.id]
    server.dispatcher.end()
  }
}

module.exports = Stop