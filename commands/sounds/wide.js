const BaseSoundCommand = require('../../base_sound_command')

class Wide extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'wide',
      group: 'sounds',
      memberName: 'wide',
      description: 'ｗｉｄｅ',
      aliases: ['putin']
    })
    this.fileNames = ['wide.mp3']
  }
}

module.exports = Wide