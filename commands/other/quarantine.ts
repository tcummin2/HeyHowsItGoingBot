import { ChannelType } from 'discord.js'
import type { CategoryChannel, Guild, Message, TextChannel, VoiceBasedChannel } from 'discord.js'
import type { Args, Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

const QUARANTINED_NAME = 'QUARANTINED'

export default class Quarantine extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'quarantine',
      fullCategory: ['other'],
      description: '☣️☣️☣️☣️☣️ QUARANTINE ☣️☣️☣️☣️☣️'
    })
    this.fileNames = ['tactical-nuke.mp3']
    this.isAutomatable = false
  }

  async reportQuarantine(guild: Guild, oldName: string, reason: string | null) {
    const scoreboard = guild.channels.cache
      .filter(({ type }) => type === ChannelType.GuildText)
      .find(({ name }) => name.toLowerCase().includes('scoreboard')) as TextChannel

    if (scoreboard) {
      let message = `${oldName} was ☣️ QUARANTINED ☣️`
      if (reason) {
        message += ` due to ${reason}`
      }
      await scoreboard.send(message)
    }
  }

  async moveChannelAndReport(voiceChannel: VoiceBasedChannel, oldName: string, reason: string | null) {
    const { guild } = voiceChannel
    const quarantineCategory = guild.channels.cache
      .filter(({ type }) => type === ChannelType.GuildCategory)
      .find(({ name }) => name.toLowerCase().includes('quarantine'))

    if (quarantineCategory) {
      await voiceChannel.setParent(quarantineCategory as CategoryChannel)
    }

    await this.reportQuarantine(guild, oldName, reason)
  }

  async messageRun(message: Message, args: Args) {
    const { member, channel } = message
    if (!member || channel.type !== ChannelType.GuildText) return

    const { voice } = member
    if (!voice.channel) return

    if (!voice.channel.name.includes(QUARANTINED_NAME)) {
      await super.messageRun(message, args)
      const voiceChannelName = voice.channel.name
      await voice.channel.setName(`☣️ ${QUARANTINED_NAME} ${voiceChannelName}`)

      const reason = await args.rest('string').catch(() => null)
      await this.moveChannelAndReport(voice.channel, voiceChannelName, reason)
    } else {
      await channel.send(`${voice.channel.name} is already ☣️ QUARANTINED ☣️!`)
    }
  }
}
