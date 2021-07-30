const BaseSoundCommand = require('../../base_sound_command')

class Superman extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'superman',
      group: 'sounds',
      memberName: 'superman',
      description: 'So here I am...',
      aliases: ['tonyhawk']
    })
    this.fileNames = ['superman.mp3']
  }
}

module.exports = Superman