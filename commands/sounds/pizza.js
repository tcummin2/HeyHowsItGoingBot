const BaseSoundCommand = require('../../base_sound_command')

class Pizza extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'pizza',
      group: 'sounds',
      memberName: 'pizza',
      description: 'Pizza'
    })
    this.fileNames = ['pizza.mp3']
  }
}

module.exports = Pizza