const BaseSoundCommand = require('../../base_sound_command')

class Bruh extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bruh',
      group: 'sounds',
      memberName: 'bruh',
      description: 'bruh'
    })
    this.fileNames = ['bruh.mp3']
  }
}

module.exports = Bruh