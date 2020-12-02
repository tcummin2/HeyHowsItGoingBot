const BaseSoundCommand = require('../../base_sound_command')

class HarrisonFord extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'harrisonford',
      group: 'sounds',
      memberName: 'harrisonford',
      description: 'Harrison Ford.',
      aliases: ['hf']
    })
    this.fileNames = ['harrison-ford.mp3']
  }
}

module.exports = HarrisonFord