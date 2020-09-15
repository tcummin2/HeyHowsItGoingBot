const BaseSoundCommand = require('../../base_sound_command')

class Enya extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'enya',
      group: 'sounds',
      memberName: 'enya',
      description: 'Who can say where the road goes?'
    })
    this.fileNames = ['enya.mp3', 'enya-2.mp3']
  }
}

module.exports = Enya