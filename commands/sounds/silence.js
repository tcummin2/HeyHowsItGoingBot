const BaseSoundCommand = require('../../base_sound_command')

class Silence extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'silence',
      group: 'sounds',
      memberName: 'silence',
      description: 'Hello darkness my old friend',
      aliases: ['darkness', 'hellodarkness', 'soundofsilence']
    })
    this.fileNames = ['silence.mp3']
  }
}

module.exports = Silence