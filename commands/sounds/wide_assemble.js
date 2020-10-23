const BaseSoundCommand = require('../../base_sound_command')

class WideAssemble extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'wideassemble',
      group: 'sounds',
      memberName: 'wideassemble',
      description: 'You know.'
    })
    this.fileNames = ['wide-assemble.mp3']
  }
}

module.exports = WideAssemble