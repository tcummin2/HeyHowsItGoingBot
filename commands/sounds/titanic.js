const BaseSoundCommand = require('../../base_sound_command')

class Titanic extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'titanic',
      group: 'sounds',
      memberName: 'titanic',
      description: 'Gentlemen, it has been a privilege playing with you tonight'
    })
    this.fileNames = ['titanic.mp3', 'titanic-2.mp3']
  }
}

module.exports = Titanic