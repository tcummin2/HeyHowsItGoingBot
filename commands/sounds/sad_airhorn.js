const BaseSoundCommand = require('../../base_sound_command')

class SadAirhorn extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sadairhorn',
      group: 'sounds',
      memberName: 'sadairhorn',
      description: 'Sad airhorn'
    })
    this.fileNames = ['sad-airhorn.mp3']
  }
}

module.exports = SadAirhorn