const BaseSoundCommand = require('../../base_sound_command')

class Daytona extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'daytona',
      group: 'sounds',
      memberName: 'daytona',
      description: 'DAYTONAAAAAAAA'
    })
    this.fileNames = ['daytona.mp3', 'daytona-2.mp3']
  }
}

module.exports = Daytona