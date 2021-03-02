const BaseSoundCommand = require('../../base_sound_command')

class Suicide extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'suicide',
      group: 'sounds',
      memberName: 'suicide',
      description: 'Halo 3 Suicide'
    })
    this.fileNames = ['suicide.mp3']
  }
}

module.exports = Suicide