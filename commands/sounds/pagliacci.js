const BaseSoundCommand = require('../../base_sound_command')

class Pagliacci extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'pagliacci',
      group: 'sounds',
      memberName: 'pagliacci',
      description: 'Italian Opera',
      aliases: ['opera']
    })
    this.fileNames = ['pagliacci.mp3']
  }
}

module.exports = Pagliacci