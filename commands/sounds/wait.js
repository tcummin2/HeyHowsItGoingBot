const BaseSoundCommand = require('../../base_sound_command')

class Wait extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'wait',
      group: 'sounds',
      memberName: 'wait',
      description: 'No no no no no no no wait wait wait wait wait',
      aliases: ['nono', 'nonono', 'punisher']
    })
    this.fileNames = ['wait.mp3']
  }
}

module.exports = Wait