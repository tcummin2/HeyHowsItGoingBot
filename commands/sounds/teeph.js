const BaseSoundCommand = require('../../base_sound_command')

class Teeph extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'teeph',
      group: 'sounds',
      memberName: 'teeph',
      description: 'Ey yo Teeph'
    })
    this.fileNames = ['teeph.mp3', 'teeph-2.mp3']
  }
}

module.exports = Teeph