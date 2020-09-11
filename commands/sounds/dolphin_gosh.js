const BaseSoundCommand = require('../../base_sound_command')

class DolphinGosh extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'dolphingosh',
      group: 'sounds',
      memberName: 'dolphingosh',
      description: '*Dolphin noise from the heavens*',
      aliases: ['🐬gosh']
    })
    this.fileNames = ['dolphin-gosh.mp3']
  }
}

module.exports = DolphinGosh