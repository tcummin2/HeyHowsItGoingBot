const BaseSoundCommand = require('../../base_sound_command')

class Matter extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'matter',
      group: 'sounds',
      memberName: 'matter',
      description: 'It don\'t matter. None of this matters',
      aliases: ['itdontmatter']
    })
    this.fileNames = ['matter.mp3']
  }
}

module.exports = Matter