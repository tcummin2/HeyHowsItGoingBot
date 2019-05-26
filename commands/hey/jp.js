const BaseSoundCommand = require('../../base_sound_command')

class JpHey extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'jphey',
      group: 'hey',
      memberName: 'jphey',
      description: 'JP'
    })
    this.fileNames = ['hey/jp.mp3', 'hey/jp-2.mp3']
  }
}

module.exports = JpHey