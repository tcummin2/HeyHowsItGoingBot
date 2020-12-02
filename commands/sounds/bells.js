const BaseSoundCommand = require('../../base_sound_command')

class Bells extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bells',
      group: 'sounds',
      memberName: 'bells',
      description: 'Bells.'
    })
    this.fileNames = ['bells.mp3']
  }
}

module.exports = Bells