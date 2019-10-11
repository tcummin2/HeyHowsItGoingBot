const BaseSoundCommand = require('../../base_sound_command')

class Goodnight extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'goodnight',
      group: 'sounds',
      memberName: 'goodnight',
      description: 'Goodnight girl, I\'ll see ya tomorrow'
    })
    this.fileNames = ['goodnight.mp3']
  }
}

module.exports = Goodnight