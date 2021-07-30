const BaseSoundCommand = require('../../base_sound_command')

class Pirates extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'pirates',
      group: 'sounds',
      memberName: 'pirates',
      description: 'That\'s got to be the worst pirate I\'ve ever seen.'
    })
    this.fileNames = ['pirates.mp3']
  }
}

module.exports = Pirates