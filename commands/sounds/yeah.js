const BaseSoundCommand = require('../../base_sound_command')

class Yeah extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'yeah',
      group: 'sounds',
      memberName: 'yeah',
      description: 'YEAHHHHHH'
    })
    this.fileNames = ['yeah.mp3', 'yeah-2.mp3']
  }
}

module.exports = Yeah