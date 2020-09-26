const BaseSoundCommand = require('../../base_sound_command')

class Hurt extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'hurt',
      group: 'sounds',
      memberName: 'hurt',
      description: 'I hurt myself today'
    })
    this.fileNames = ['hurt.mp3']
  }
}

module.exports = Hurt