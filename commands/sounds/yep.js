const BaseSoundCommand = require('../../base_sound_command')

class Yep extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'yep',
      group: 'sounds',
      memberName: 'yep',
      description: '*Record Scratch* *Freeze Frame* Yep, that\'s me'
    })
    this.fileNames = ['yep.mp3']
  }
}

module.exports = Yep