const BaseSoundCommand = require('../../base_sound_command')

class FarHey extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'farhey',
      group: 'hey',
      memberName: 'farhey',
      description: '............hey'
    })
    this.fileNames = ['hey/far.mp3']
  }
}

module.exports = FarHey