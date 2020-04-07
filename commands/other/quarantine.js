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
  }

  reportQuarantine(guild, oldName, args) {
    var scoreboard = guild.channels.find(({ name }) => name.toLowerCase().includes('scoreboard'))
    if (scoreboard) {
      var message = `${oldName} was ☣️ QUARANTINED ☣️`
      if (args) {
        message = `${message} due to ${args}`
      }
      scoreboard.send(message)
    }
  }

  moveChannelAndReport(voiceChannel, oldName, args) {
    var { guild } = voiceChannel
    var quarantineCategory = guild.channels.filter(({ type }) => type === 'category')
      .find(({ name }) => name.toLowerCase().includes('quarantine'))

    if (quarantineCategory) {
      voiceChannel.setParent(quarantineCategory)
    }

    this.reportQuarantine(guild, oldName, args)
  }

  async run({ member: { voiceChannel }, channel }, args) {
    if (!voiceChannel) return

    if (!voiceChannel.name.includes(QUARANTINED_NAME)) {
      super.run(...arguments)
        .then(() => {
          const voiceChannelName = voiceChannel.name
          voiceChannel.setName(`☣️ ${QUARANTINED_NAME} ${voiceChannelName}`)
            .then(channel => this.moveChannelAndReport(channel, voiceChannelName, args))
        })
    } else {
      channel.send(`${voiceChannel.name} is already ☣️ QUARANTINED ☣️!`)
    }
  }
}

module.exports = Quarantine