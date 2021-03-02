const BaseSoundCommand = require('../../base_sound_command')

class DoubleKill extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'doublekill',
      group: 'sounds',
      memberName: 'doublekill',
      description: 'Double Kill'
    })
    this.fileNames = ['double-kill.mp3']
  }
}

module.exports = DoubleKill