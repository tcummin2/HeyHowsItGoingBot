const BaseSoundCommand = require('../../base_sound_command')

class Today extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'today',
      group: 'sounds',
      memberName: 'today',
      description: 'Today'
    })
    this.fileNames = ['today.mp3']
  }
}

module.exports = Today