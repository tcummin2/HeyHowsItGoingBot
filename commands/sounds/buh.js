const BaseSoundCommand = require('../../base_sound_command')

class Buh extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'buh',
      group: 'sounds',
      memberName: 'buh',
      description: 'buh'
    })
    this.fileNames = ['buh.mp3', 'buh-loud.mp3', 'buh-far.mp3']
  }
}

module.exports = Buh