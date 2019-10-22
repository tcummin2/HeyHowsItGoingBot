const BaseSoundCommand = require('../../base_sound_command')

class Assemble extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'assemble',
      group: 'sounds',
      memberName: 'assemble',
      description: 'BUMMMMMM, BUM BUM BUM BUMMMMMMMMMM BUMMM BUMMM BUMMMMMM'
    })
    this.fileNames = ['assemble.mp3']
  }
}

module.exports = Assemble