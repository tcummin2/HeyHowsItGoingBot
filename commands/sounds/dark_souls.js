const BaseSoundCommand = require('../../base_sound_command')

class DarkSouls extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'darksouls',
      group: 'sounds',
      memberName: 'darksouls',
      description: 'Thank you Dark Souls.'
    })
    this.fileNames = ['dark-souls.mp3', 'dark-souls-2.mp3']
  }
}

module.exports = DarkSouls