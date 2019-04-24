const BaseSoundCommand = require('../../base_sound_command')

class Conk extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'conk',
      group: 'sounds',
      memberName: 'conk',
      description: 'We\'re all out of bepis'
    })
    this.fileNames = ['conk.mp3']
  }
}

module.exports = Conk