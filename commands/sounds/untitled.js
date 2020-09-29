const BaseSoundCommand = require('../../base_sound_command')

class Untitled extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'untitled',
      group: 'sounds',
      memberName: 'untitled',
      description: 'How could this happen to me?',
      aliases: ['howcouldthishappentome']
    })
    this.fileNames = ['untitled.mp3']
  }
}

module.exports = Untitled