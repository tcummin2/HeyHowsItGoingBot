const BaseSoundCommand = require('../../base_sound_command')

class CoffinDance extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'coffindance',
      group: 'sounds',
      memberName: 'coffindance',
      description: 'Coffin dance',
      aliases: ['coffin']
    })
    this.fileNames = ['coffin-dance.mp3']
  }
}

module.exports = CoffinDance