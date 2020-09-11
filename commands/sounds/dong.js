const BaseSoundCommand = require('../../base_sound_command')

class Dong extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'dong',
      group: 'sounds',
      memberName: 'dong',
      description: '🍆',
      aliases: ['🍆']
    })
    this.fileNames = ['dong.mp3']
  }
}

module.exports = Dong