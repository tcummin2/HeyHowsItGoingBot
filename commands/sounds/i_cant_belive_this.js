const BaseSoundCommand = require('../../base_sound_command')

class ICantBelieveThis extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'icantbelievethis',
      group: 'sounds',
      memberName: 'icantbelievethis',
      description: 'I can\'t believe this',
      aliases: ['icantbelieve', 'cantbelieve', 'believe']
    })
    this.fileNames = ['i-cant-believe-this.mp3']
  }
}

module.exports = ICantBelieveThis