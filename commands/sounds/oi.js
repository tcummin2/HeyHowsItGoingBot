const BaseSoundCommand = require('../../base_sound_command')

class Oi extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'oi',
      group: 'sounds',
      memberName: 'oi',
      description: 'oi'
    })
    this.fileNames = ['oi.mp3']
  }
}

module.exports = Oi