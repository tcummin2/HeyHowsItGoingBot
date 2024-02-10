import { Command } from '@sapphire/framework'
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  getVoiceConnection
} from '@discordjs/voice'

export default class BaseSoundCommand extends Command {
  constructor(client, args) {
    super(client, args)
    this.isAutomatable = true
  }

  async play(connection, message, args) {
    const argumentIndex = await args.pick('number').catch(() => -1)
    const index = !this.ignoreArguments && argumentIndex >= 1
      ? Math.floor(Math.floor((argumentIndex - 1) % this.fileNames.length))
      : Math.floor(Math.random() * this.fileNames.length)

    const fileName = this.fileNames[index]
    const filePath = `sounds/${fileName}`

    const server = global.servers[message.guild.id]
    server.isPlaying = true

    const resource = createAudioResource(filePath)
    const player = createAudioPlayer()
    player.on(AudioPlayerStatus.Idle, () => {
      server.isPlaying = false
      connection.destroy()
    })
    connection.subscribe(player)

    player.play(resource)
  }

  async messageRun(message, args) {
    const { member, guild } = message
    if (member.voice.channel && !getVoiceConnection(guild.id)) {
      if (!global.servers[guild.id]) {
        global.servers[guild.id] = {}
      }

      const connection = joinVoiceChannel({
        channelId: member.voice.channel.id,
        guildId: member.voice.guild.id,
        adapterCreator: member.voice.guild.voiceAdapterCreator,
        selfDeaf: false,
        setMute: false
      })

      await this.play(connection, message, args)
    }
  }
}
