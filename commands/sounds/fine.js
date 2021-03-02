const BaseSoundCommand = require('../../base_sound_command')

class Fine extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'fine',
      group: 'sounds',
      memberName: 'fine',
      description: 'You just have to say you\'re fine'
    })
    this.fileNames = ['fine.mp3']
  }
}

module.exports = Fine