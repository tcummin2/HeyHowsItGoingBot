const BaseSoundCommand = require('../../base_sound_command')

class IHurt extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'ihurt',
      group: 'sounds',
      memberName: 'ihurt',
      description: 'I hurt'
    })
    this.fileNames = ['i-hurt.mp3']
  }
}

module.exports = IHurt