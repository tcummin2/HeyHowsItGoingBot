const BaseSoundCommand = require('../../base_sound_command')

class Snories extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'snories',
      group: 'sounds',
      memberName: 'snories',
      description: 'Just some snories'
    })
    this.fileNames = ['snories.mp3']
  }
}

module.exports = Snories