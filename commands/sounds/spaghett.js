const BaseSoundCommand = require('../../base_sound_command')

class Spaghett extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'spaghett',
      group: 'sounds',
      memberName: 'spaghett',
      description: 'Somebody touch\'a my buttered noodles and ketchup'
    })
    this.fileNames = ['spaghett.mp3']
  }
}

module.exports = Spaghett