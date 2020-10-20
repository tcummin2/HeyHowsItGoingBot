const BaseSoundCommand = require('../../base_sound_command')

class Mine extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'mine',
      group: 'sounds',
      memberName: 'mine',
      description: 'And they call it a mine. A MINE!'
    })
    this.fileNames = ['mine.mp3', 'mine-2.mp3']
  }
}

module.exports = Mine