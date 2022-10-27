const BaseSoundCommand = require('../../base_sound_command')

class Cbat extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'cbat',
      group: 'sounds',
      memberName: 'cbat',
      description: 'Cbat',
    })
    this.fileNames = ['cbat.mp3']
  }
}

module.exports = Cbat