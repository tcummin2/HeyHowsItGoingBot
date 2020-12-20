const BaseSoundCommand = require('../../base_sound_command')

class Cyberpunk extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'cyberpunk',
      group: 'sounds',
      memberName: 'cyberpunk',
      description: 'Keanu'
    })
    this.fileNames = ['cyberpunk.mp3']
  }
}

module.exports = Cyberpunk