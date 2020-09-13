const BaseSoundCommand = require('../../base_sound_command')

class Nyuk extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'nyuk',
      group: 'sounds',
      memberName: 'nyuk',
      description: 'NYUK NYUK NYUK NYUK'
    })
    this.fileNames = ['nyuk.mp3']
  }
}

module.exports = Nyuk