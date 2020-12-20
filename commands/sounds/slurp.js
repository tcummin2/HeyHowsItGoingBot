const BaseSoundCommand = require('../../base_sound_command')

class Slurp extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'slurp',
      group: 'sounds',
      memberName: 'slurp',
      description: 'Numnumnumnumnumnum'
    })
    this.fileNames = ['slurp.mp3', 'slurp-2.mp3', 'slurp-3.mp3', 'slurp-4.mp3', 'slurp-5.mp3']
  }
}

module.exports = Slurp