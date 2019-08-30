const BaseSoundCommand = require('../../base_sound_command')

class Yes extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'yes',
      group: 'sounds',
      memberName: 'yes',
      description: 'yes'
    })
    this.fileNames = ['yes.mp3']
  }
}

module.exports = Yes