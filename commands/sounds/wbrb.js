const BaseSoundCommand = require('../../base_sound_command')

class Wbrb extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'wbrb',
      group: 'sounds',
      memberName: 'wbrb',
      description: 'We\'ll be right back'
    })
    this.fileNames = ['wbrb.mp3']
  }
}

module.exports = Wbrb