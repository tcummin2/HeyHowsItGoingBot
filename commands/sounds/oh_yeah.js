const BaseSoundCommand = require('../../base_sound_command')

class OhYeah extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'ohyeah',
      group: 'sounds',
      memberName: 'ohyeah',
      description: 'Oh yeah',
      aliases: ['luigi']
    })
    this.fileNames = ['oh-yeah.mp3', 'oh-yeah-2.mp3', 'oh-yeah-3.mp3']
  }
}

module.exports = OhYeah