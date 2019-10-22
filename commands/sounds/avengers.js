const BaseSoundCommand = require('../../base_sound_command')

class Avengers extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'avengers',
      group: 'sounds',
      memberName: 'avengers',
      description: 'Bummmmmm, bum bum BUM BUMMMMMMMMMM BUMMM BUMMM BUMMMMMM'
    })
    this.fileNames = ['avengers.mp3']
  }
}

module.exports = Avengers