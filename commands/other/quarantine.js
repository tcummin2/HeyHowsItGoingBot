import { ChannelType } from 'discord.js'
import BaseSoundCommand from '../../base_sound_command.js'

const QUARANTINED_NAME = 'QUARANTINED'

export default class Quarantine extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'quarantine',
      category: 'other',
      description: '☣️☣️☣️☣️☣️ QUARANTINE ☣️☣️☣️☣️☣️'
    })
    this.fileNames = ['tactical-nuke.mp3']
    this.isAutomatable = false
  }

  reportQuarantine(guild, oldName, reason) {
    const scoreboard = guild.channels.cache.find(({ name }) => name.toLowerCase().includes('scoreboard'))
    if (scoreboard) {
      let message = `${oldName} was ☣️ QUARANTINED ☣️`
      if (reason) {
        message += ` due to ${reason}`
      }
      scoreboard.send(message)
    }
  }

  async moveChannelAndReport(voiceChannel, oldName, reason) {
    const { guild } = voiceChannel
    const quarantineCategory = guild.channels.cache
      .filter(({ type }) => type === ChannelType.GuildCategory)
      .find(({ name }) => name.toLowerCase().includes('quarantine'))

    if (quarantineCategory) {
      await voiceChannel.setParent(quarantineCategory)
    }

    this.reportQuarantine(guild, oldName, reason)
  }

  async messageRun(message, args) {
    const { member: { voice }, channel } = message
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
