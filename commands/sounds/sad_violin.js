const BaseSoundCommand = require('../../base_sound_command')

class SadViolin extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sadviolin',
      group: 'sounds',
      memberName: 'sadviolin',
      description: 'Sad violin'
    })
    this.fileNames = ['sad-violin.mp3']
  }
}

module.exports = SadViolin