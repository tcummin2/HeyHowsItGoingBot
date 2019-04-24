const BaseSoundCommand = require('../../base_sound_command')

class Jimbo extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'jimbo',
      group: 'sounds',
      memberName: 'jimbo',
      description: 'Wuss poppin Jimbo'
    })
    this.fileNames = ['jimbo.mp3']
  }
}

module.exports = Jimbo