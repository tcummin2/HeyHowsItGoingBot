const BaseSoundCommand = require('../../base_sound_command')

class HeyBeter extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'heybeter',
      group: 'sounds',
      memberName: 'heybeter',
      description: 'Hey 🅱️eter'
    })
    this.fileNames = ['hey-beter.mp3', 'hey-beter-ethereal.mp3']
  }
}

module.exports = HeyBeter