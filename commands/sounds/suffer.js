const BaseSoundCommand = require('../../base_sound_command')

class Suffer extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'suffer',
      group: 'sounds',
      memberName: 'suffer',
      description: 'Why are we still here? Just to suffer?',
      aliases: ['whyarewestillhere']
    })
    this.fileNames = ['suffer.mp3']
  }
}

module.exports = Suffer