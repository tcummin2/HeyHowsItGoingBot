const BaseSoundCommand = require('../../base_sound_command')

class Dolphin extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'dolphin',
      group: 'sounds',
      memberName: 'dolphin',
      description: '*Dolphin noise*',
      aliases: ['🐬']
    })
    this.fileNames = ['dolphin.mp3']
  }
}

module.exports = Dolphin