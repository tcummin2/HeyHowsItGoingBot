const BaseSoundCommand = require('../../base_sound_command')

class Betrayal extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'betrayal',
      group: 'sounds',
      memberName: 'betrayal',
      description: 'Halo 3 Betrayal'
    })
    this.fileNames = ['betrayal.mp3']
  }
}

module.exports = Betrayal