const BaseSoundCommand = require('../../base_sound_command')

class Mmm extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'mmm',
      group: 'sounds',
      memberName: 'mmm',
      description: 'Mmm whatcha say'
    })
    this.fileNames = ['mmm.mp3']
  }
}

module.exports = Mmm