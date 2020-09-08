const BaseSoundCommand = require('../../base_sound_command')

class Ewu extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'ewu',
      group: 'sounds',
      memberName: 'ewu',
      description: 'eeeewwwwuuuu'
    })
    this.fileNames = ['ewu.mp3']
  }
}

module.exports = Ewu