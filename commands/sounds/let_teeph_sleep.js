const BaseSoundCommand = require('../../base_sound_command')

class LetTeephSleep extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'letteephsleep',
      group: 'sounds',
      memberName: 'letteephsleep',
      description: 'Shhh baby sleeping'
    })
    this.fileNames = ['let-teeph-sleep.mp3']
  }
}

module.exports = LetTeephSleep