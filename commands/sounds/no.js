const BaseSoundCommand = require('../../base_sound_command')

class No extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'no',
      group: 'sounds',
      memberName: 'no',
      description: 'no'
    })
    this.fileNames = ['no.mp3']
  }
}

module.exports = No