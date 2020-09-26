const BaseSoundCommand = require('../../base_sound_command')

class Dirt extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'dirt',
      group: 'sounds',
      memberName: 'dirt',
      description: 'My emptire of dirt'
    })
    this.fileNames = ['dirt.mp3']
  }
}

module.exports = Dirt