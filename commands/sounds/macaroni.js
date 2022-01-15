const BaseSoundCommand = require('../../base_sound_command')

class Macaroni extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'macaroni',
      group: 'sounds',
      memberName: 'macaroni',
      description: 'Macaroni, with the chicken strips',
      aliases: ['chickenstrips', 'uh']
    })
    this.fileNames = ['macaroni.mp3', 'macaroni-2.mp3']
  }
}

module.exports = Macaroni