const BaseSoundCommand = require('../../base_sound_command')

class Wield extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'wield',
      group: 'sounds',
      memberName: 'wield',
      description: 'You cannot wield it. None of us can.'
    })
    this.fileNames = ['wield.mp3']
  }
}

module.exports = Wield