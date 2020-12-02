const BaseSoundCommand = require('../../base_sound_command')

class Bizza extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bizza',
      group: 'sounds',
      memberName: 'bizza',
      description: 'Bizza',
      aliases: ['🅱️izza']
    })
    this.fileNames = ['bizza.mp3']
  }
}

module.exports = Bizza