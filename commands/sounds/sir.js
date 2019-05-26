const BaseSoundCommand = require('../../base_sound_command')

class Sir extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sir',
      group: 'sounds',
      memberName: 'sir',
      description: 'SIRRRRRRRRRRRRRRRRRRRRRR'
    })
    this.fileNames = ['sir.mp3']
  }
}

module.exports = Sir