const BaseSoundCommand = require('../../base_sound_command')

class Vengaboiz extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'vengaboiz',
      group: 'sounds',
      memberName: 'vengaboiz',
      description: 'We like to party'
    })
    this.fileNames = ['vengaboiz.mp3']
  }
}

module.exports = Vengaboiz