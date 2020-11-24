const BaseSoundCommand = require('../../base_sound_command')

class B extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'b',
      group: 'sounds',
      memberName: 'b',
      description: '🅱️',
      aliases: ['🅱️']
    })
    this.fileNames = ['b.mp3']
  }
}

module.exports = B