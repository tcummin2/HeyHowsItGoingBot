const BaseSoundCommand = require('../../base_sound_command')

class Scoin extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'scoin',
      group: 'sounds',
      memberName: 'scoin',
      description: '\'scoin on, boys?',
      aliases: ['scoin', 'sgoin']
    })
    this.fileNames = ['scoin.mp3']
  }
}

module.exports = Scoin