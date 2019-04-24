const BaseSoundCommand = require('../../base_sound_command')

class BigIron extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bigiron',
      group: 'sounds',
      memberName: 'bigiron',
      description: 'BIGIRONONHISHIP'
    })
    this.fileNames = ['big-iron.mp3']
  }
}

module.exports = BigIron