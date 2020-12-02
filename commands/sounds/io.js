const BaseSoundCommand = require('../../base_sound_command')

class Io extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'io',
      group: 'sounds',
      memberName: 'io',
      description: 'Io'
    })
    this.fileNames = ['io.mp3', 'io-2.mp3']
  }
}

module.exports = Io