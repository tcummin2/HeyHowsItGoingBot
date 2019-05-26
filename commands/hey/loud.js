const BaseSoundCommand = require('../../base_sound_command')

class LoudHey extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'loudhey',
      group: 'hey',
      memberName: 'loudhey',
      description: 'JP'
    })
    this.fileNames = ['hey/loud.mp3', 'hey/loud-2.mp3']
  }
}

module.exports = LoudHey