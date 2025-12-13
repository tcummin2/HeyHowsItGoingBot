import type { Args } from '@sapphire/framework'
import { Command } from '@sapphire/framework'
import type {
  VoiceConnection
} from '@discordjs/voice'
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  getVoiceConnection
} from '@discordjs/voice'
import type { Message } from 'discord.js'
import serverManager from './server_manager.ts'

export default class BaseSoundCommand extends Command {
  isAutomatable: boolean = true
  ignoreArguments: boolean = false
  fileNames: string[] = []

  async play(connection: VoiceConnection, message: Message, args: Args) {
    if (!message.guild) return

    const argumentIndex = await args.pick('number').catch(() => -1)
    const index = !this.ignoreArguments && argumentIndex >= 1
      ? Math.floor(Math.floor((argumentIndex - 1) % this.fileNames.length))
      : Math.floor(Math.random() * this.fileNames.length)

    const fileName = this.fileNames[index]
    const filePath = `sounds/${fileName}`

    serverManager.setPlaying(message.guild.id, true)

    const resource = createAudioResource(filePath)
    const player = createAudioPlayer()
    player.on(AudioPlayerStatus.Idle, () => {
      if (message.guild) {
        serverManager.setPlaying(message.guild.id, false)
      }
      connection.destroy()
    })
    connection.subscribe(player)

    player.play(resource)
  }

  async messageRun(message: Message, args: Args) {
    const { member, guild } = message
    if (!guild) return

    if (member?.voice.channel && !getVoiceConnection(guild.id)) {
      const connection = joinVoiceChannel({
        channelId: member.voice.channel.id,
        guildId: member.voice.guild.id,
        adapterCreator: member.voice.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
      })

      await this.play(connection, message, args)
    }
  }
}
