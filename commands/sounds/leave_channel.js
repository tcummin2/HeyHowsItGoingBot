const Commando = require('discord.js-commando')

class LeaveChannelCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'heyleave',
      group: 'sounds',
      memberName: 'heyleave',
      description: 'Leaves the channel'
    })
  }

  async run(message, args) {
    if (message.guild.voiceConnection) {
      message.guild.voiceConnection.disconnect()
    }
  }
}

module.exports = LeaveChannelCommand