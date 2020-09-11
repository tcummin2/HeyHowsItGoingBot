const BaseSoundCommand = require('../../base_sound_command')

class CrazyFrog extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'crazyfrog',
      group: 'sounds',
      memberName: 'crazyfrog',
      description: 'BRING DING DING DING DING DING'
    })
    this.fileNames = ['crazy-frog.mp3', 'crazy-frog-2.mp3']
  }
}

module.exports = CrazyFrog