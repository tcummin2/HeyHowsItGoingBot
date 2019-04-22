const BaseSoundCommand = require('../../base_sound_command')

class DanHey extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'danhey',
      group: 'sounds',
      memberName: 'danhey',
      description: 'Dan'
    })
    this.fileNames = ['hey/dan.mp3']
  }
}

module.exports = DanHey