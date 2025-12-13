import { Command } from '@sapphire/framework'
import type { Message } from 'discord.js'
import { getVoiceConnection } from '@discordjs/voice'
import serverManager from '../../server_manager.ts'

export default class Stop extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'stop',
      fullCategory: ['text'],
      description: 'Stop the music'
    })
  }

  async messageRun({ guild }: Message) {
    if (!guild) return

    const connection = getVoiceConnection(guild.id)
    if (connection) {
      connection.destroy()
      serverManager.setPlaying(guild.id, false)
    }
  }
}
