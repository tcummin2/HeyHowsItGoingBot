const BaseSoundCommand = require('../../base_sound_command')

const QUARANTINED_NAME = 'QUARANTINED'

class Quarantine extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'quarantine',
      group: 'other',
      memberName: 'quarantine',
      description: '☣️☣️☣️☣️☣️ QUARANTINE ☣️☣️☣️☣️☣️'
    })
    this.fileNames = ['tactical-nuke.mp3']
    this.isAutomatable = false
  }

  reportQuarantine(guild, oldName, args) {
    const scoreboard = guild.channels.cache.find(({ name }) => name.toLowerCase().includes('scoreboard'))
    if (scoreboard) {
      let message = `${oldName} was ☣️ QUARANTINED ☣️`
      if (args) {
        message = `${message} due to ${args}`
      }
      scoreboard.send(message)
    }
  }

  async moveChannelAndReport(voiceChannel, oldName, args) {
    const { guild } = voiceChannel
    const quarantineCategory = guild.channels.cache.filter(({ type }) => type === 'category')
      .find(({ name }) => name.toLowerCase().includes('quarantine'))

    if (quarantineCategory) {
      await voiceChannel.setParent(quarantineCategory)
    }

    this.reportQuarantine(guild, oldName, args)
  }

  async run({ member: { voice }, channel }, args) {
    if (!voice.channel) return

    if (!voice.channel.name.includes(QUARANTINED_NAME)) {
      await super.run(...arguments)
      const voiceChannelName = voice.channel.name
      await voice.channel.setName(`☣️ ${QUARANTINED_NAME} ${voiceChannelName}`)
      await this.moveChannelAndReport(voice.channel, voiceChannelName, args)
    } else {
      channel.send(`${voice.channel.name} is already ☣️ QUARANTINED ☣️!`)
    }
  }
}

module.exports = Quarantine