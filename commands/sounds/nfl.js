const BaseSoundCommand = require('../../base_sound_command')

class Nfl extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'nfl',
      group: 'sounds',
      memberName: 'nfl',
      description: 'Cue the dancing robot'
    })
    this.fileNames = ['nfl.mp3']
  }
}

module.exports = Nfl