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

  async run({ member: { voiceChannel } }) {
    super.run(...arguments).then(() => {
      if (voiceChannel && !voiceChannel.name.includes(QUARANTINED_NAME)) {
        voiceChannel.setName(`☣️ ${QUARANTINED_NAME} ${voiceChannel.name}`)
      }
    })
  }
}

module.exports = Quarantine