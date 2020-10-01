const BaseSoundCommand = require('../../base_sound_command')

class HeyPeter extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'heypeter',
      group: 'sounds',
      memberName: 'heypeter',
      description: 'Hey Peter Francis Geraci'
    })
    this.fileNames = ['hey-peter.mp3']
  }
}

module.exports = HeyPeter