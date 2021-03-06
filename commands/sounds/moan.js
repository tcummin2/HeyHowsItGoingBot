const BaseSoundCommand = require('../../base_sound_command')

class Moan extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'moan',
      group: 'sounds',
      memberName: 'moan',
      description: 'This guy moaned at least this loud',
      aliases: ['loud']
    })
    this.fileNames = ['moan.mp3']
  }
}

module.exports = Moan