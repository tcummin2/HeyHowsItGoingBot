const BaseSoundCommand = require('../../base_sound_command')

class SadEarrape extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sadearrape',
      group: 'sounds',
      memberName: 'sadearrape',
      description: 'Sad voilin EARRAPE'
    })
    this.fileNames = ['sad-violin-earrape.mp3']
  }
}

module.exports = SadEarrape