const BaseSoundCommand = require('../../base_sound_command')

class Hello extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'hello',
      group: 'sounds',
      memberName: 'hello',
      description: 'Hello'
    })
    this.fileNames = ['Hello.mp3']
  }
}

module.exports = Hello