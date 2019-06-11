const BaseSoundCommand = require('../../base_sound_command')

class Bepis extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bepis',
      group: 'sounds',
      memberName: 'bepis',
      description: 'Gimme the bepis'
    })
    this.fileNames = ['bepis.mp3', 'bepis-2.mp3', 'bepis-3.mp3', 'bepis-4.mp3', 'bepis-5.mp3', 'bepis-6.mp3', 'bepis-7.mp3']
  }
}

module.exports = Bepis