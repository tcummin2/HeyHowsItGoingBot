import { Command } from '@sapphire/framework'
import { getVoiceConnection } from '@discordjs/voice'

export default class Stop extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'stop',
      category: 'text',
      description: 'Stop the music'
    })
  }

  async messageRun({ guild }) {
    const connection = getVoiceConnection(guild.id)
    if (connection) {
      connection.destroy()
      const server = global.servers[guild.id]
      server.isPlaying = false
    }
  }
}
