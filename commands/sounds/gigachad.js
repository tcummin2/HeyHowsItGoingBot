const BaseSoundCommand = require('../../base_sound_command')

class Gigachad extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'gigachad',
      group: 'sounds',
      memberName: 'gigachad',
      description: 'Yes.',
      aliases: ['chad', 'chadd']
    })
    this.fileNames = ['gigachad.mp3']
  }
}

module.exports = Gigachad