const BaseSoundCommand = require('../../base_sound_command')

class BigEwu extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bigewu',
      group: 'sounds',
      memberName: 'bigewu',
      description: 'EEEEWWWWUUUU'
    })
    this.fileNames = ['big_ewu.mp3']
  }
}

module.exports = BigEwu