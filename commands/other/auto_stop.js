const { Command } = require('discord.js-commando')
const { onVoiceUpdate } = require('../../utils')

class AutoStop extends Command {
  constructor(client) {
    super(client, {
      name: 'autostop',
      group: 'other',
      memberName: 'autostop',
      description: 'Stop any auto-commands in server'
    })
  }

  async run({ client, guild, channel }) {
    if (!global.servers[guild.id]) global.servers[guild.id] = {}

    Object.assign(global.servers[guild.id], { auto: null })
    client.off('voiceStateUpdate', onVoiceUpdate)

    channel.send('Stopped watching for auto-joins')
  }
}

module.exports = AutoStop