const BaseSoundCommand = require('../../base_sound_command')

class NewPhone extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'newphone',
      group: 'sounds',
      memberName: 'newphone',
      description: 'New phone who dis'
    })
    this.fileNames = ['newphone.mp3']
  }
}

module.exports = NewPhone