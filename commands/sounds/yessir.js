const BaseSoundCommand = require('../../base_sound_command')

class YesSir extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'yessir',
      group: 'sounds',
      memberName: 'yessir',
      description: 'How was everybody\'s day'
    })
    this.fileNames = ['yessir.mp3']
  }
}

module.exports = YesSir