const BaseSoundCommand = require('../../base_sound_command')

class GoodnightBomb extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'goodnightbomb',
      group: 'sounds',
      memberName: 'goodnightbomb',
      description: 'Goodnight girl, I\'ll see ya tomorrow'
    })
    this.fileNames = ['goodnight_bomb.mp3']
  }
}

module.exports = GoodnightBomb