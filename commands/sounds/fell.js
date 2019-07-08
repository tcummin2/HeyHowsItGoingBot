const BaseSoundCommand = require('../../base_sound_command')

class Fell extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'fell',
      group: 'sounds',
      memberName: 'fell',
      description: 'he fell'
    })
    this.fileNames = ['fell.mp3']
  }
}

module.exports = Fell