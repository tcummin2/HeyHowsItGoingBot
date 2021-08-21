const BaseSoundCommand = require('../../base_sound_command')

class Oof extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'oof',
      group: 'sounds',
      memberName: 'oof',
      description: 'Big oof'
    })
    this.fileNames = ['oof.mp3', 'oof-2.mp3']
  }
}

module.exports = Oof