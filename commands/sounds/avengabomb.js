const BaseSoundCommand = require('../../base_sound_command')

class Avengabomb extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'avengabomb',
      group: 'sounds',
      memberName: 'avengabomb',
      description: 'Mom come pick me up I\'m scared'
    })
    this.fileNames = ['avengabomb.mp3']
  }
}

module.exports = Avengabomb