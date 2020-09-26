const BaseSoundCommand = require('../../base_sound_command')

class Gandalf extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'gandalf',
      group: 'sounds',
      memberName: 'gandalf',
      description: 'Fly you fools'
    })
    this.fileNames = ['gandalf.mp3', 'gandalf-2.mp3']
  }
}

module.exports = Gandalf