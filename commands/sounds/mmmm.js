const BaseSoundCommand = require('../../base_sound_command')

class Mmmm extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'mmmm',
      group: 'sounds',
      memberName: 'mmmm',
      description: 'Mmm whatcha mmm whatcha mmm what mmm mmm'
    })
    this.fileNames = ['mmmm.mp3']
  }
}

module.exports = Mmmm