const BaseSoundCommand = require('../../base_sound_command')

class Woo extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'woo',
      group: 'sounds',
      memberName: 'woo',
      description: 'WOO YEAH BAYBEEEE',
      aliases: ['charlie', 'cr1tikal']
    })
    this.fileNames = ['woo.mp3', 'woo-2.mp3']
  }
}

module.exports = Woo