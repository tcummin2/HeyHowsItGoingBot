const BaseSoundCommand = require('../../base_sound_command')

class Kabuki extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'kabuki',
      group: 'sounds',
      memberName: 'kabuki',
      description: 'YOOOOOOOOOOOOOOOOOOOO',
      aliases: ['not']
    })
    this.fileNames = ['kabuki.mp3', 'kabuki-2.mp3']
  }
}

module.exports = Kabuki