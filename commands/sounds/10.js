const BaseSoundCommand = require('../../base_sound_command')

class Ten extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: '10',
      group: 'sounds',
      memberName: '10',
      description: 'That\'s a ten',
      aliases: ['ten']
    })
    this.fileNames = ['10.mp3']
  }
}

module.exports = Ten