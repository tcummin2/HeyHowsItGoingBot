const BaseSoundCommand = require('../../base_sound_command')

class ColdOne extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'coldone',
      group: 'sounds',
      memberName: 'coldone',
      description: 'Das a cold one'
    })
    this.fileNames = ['cold-one.mp3']
  }
}

module.exports = ColdOne