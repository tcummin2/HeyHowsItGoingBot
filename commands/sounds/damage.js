const BaseSoundCommand = require('../../base_sound_command')

class Damage extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'damage',
      group: 'sounds',
      memberName: 'damage',
      description: 'NOW THAT\'S A LOT OF DAMAGE'
    })
    this.fileNames = ['damage.mp3', 'damage-2.mp3']
  }
}

module.exports = Damage