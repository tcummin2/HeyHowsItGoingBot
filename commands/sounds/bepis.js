const BaseSoundCommand = require('../../base_sound_command')

class Bepis extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bepis',
      group: 'sounds',
      memberName: 'bepis',
      description: 'Gimme the bepis'
    })
    this.fileNames = ['bepis.mp3']
  }
}

module.exports = Bepis