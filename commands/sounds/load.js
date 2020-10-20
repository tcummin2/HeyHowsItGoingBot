const BaseSoundCommand = require('../../base_sound_command')

class Load extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'load',
      group: 'sounds',
      memberName: 'load',
      description: 'Share the load...',
      aliases: ['share']
    })
    this.fileNames = ['load.mp3']
  }
}

module.exports = Load