const BaseSoundCommand = require('../../base_sound_command')

class MamboBomb extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'mambobomb',
      group: 'sounds',
      memberName: 'mambobomb',
      description: 'Ladies and gentlemen...'
    })
    this.fileNames = ['mambo-bomb.mp3']
  }
}

module.exports = MamboBomb