import { Command } from '@sapphire/framework'
import { onVoiceUpdate } from '../../utils.js'

export default class AutoStop extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'autostop',
      category: 'other',
      description: 'Stop any auto-commands in server'
    })
  }

  async messageRun({ client, guild, channel }) {
    if (!global.servers[guild.id]) global.servers[guild.id] = {}

    Object.assign(global.servers[guild.id], { auto: null })
    client.off('voiceStateUpdate', onVoiceUpdate)

    await channel.send('Stopped watching for auto-joins')
  }
}
