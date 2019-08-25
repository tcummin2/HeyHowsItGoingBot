const BaseSoundCommand = require('../../base_sound_command')

class Laugh extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'laugh',
      group: 'sounds',
      memberName: 'laugh',
      description: 'Laugh track'
    })
    this.fileNames = ['laugh.mp3', 'laugh-2.mp3', 'laugh-3.mp3', 'laugh-4.mp3']
  }
}

module.exports = Laugh