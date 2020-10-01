const BaseSoundCommand = require('../../base_sound_command')

class Peter extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'peter',
      group: 'sounds',
      memberName: 'peter',
      description: 'Attorney Peter Francis Geraci',
      aliases: ['geraci']
    })
    this.fileNames = ['peter.mp3']
  }
}

module.exports = Peter