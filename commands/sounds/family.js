const BaseSoundCommand = require('../../base_sound_command')

class Family extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'family',
      group: 'sounds',
      memberName: 'family',
      description: 'Family. Family. Family. Family. Family. Family. Family. Family.'
    })
    this.fileNames = ['family.mp3']
  }
}

module.exports = Family