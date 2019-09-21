const BaseSoundCommand = require('../../base_sound_command')

class Michael extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'michael',
      group: 'sounds',
      memberName: 'michael',
      description: 'MICHAEL'
    })
    this.fileNames = ['michael.mp3', 'michael-2.mp3', 'michael-3.mp3', 'michael-4.mp3', 'michael-5.mp3', 'michael-all.mp3', 'michael-loud.mp3']
  }
}

module.exports = Michael