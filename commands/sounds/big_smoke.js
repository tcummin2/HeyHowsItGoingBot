const BaseSoundCommand = require('../../base_sound_command')

class BigSmoke extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bigsmoke',
      group: 'sounds',
      memberName: 'bigsmoke',
      description: 'OHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
    })
    this.fileNames = ['big-smoke.mp3']
  }
}

module.exports = BigSmoke