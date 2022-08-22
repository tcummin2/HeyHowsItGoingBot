const BaseSoundCommand = require('../../base_sound_command')

class Hermione extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'hermione',
      group: 'sounds',
      memberName: 'hermione',
      description: 'Not me, not Hermione, YOU.',
      aliases: ['notme', 'nothermione']
    })
    this.fileNames = ['hermione.mp3']
  }
}

module.exports = Hermione