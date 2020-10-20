const BaseSoundCommand = require('../../base_sound_command')

class Toss extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'toss',
      group: 'sounds',
      memberName: 'toss',
      description: 'I CANNOT JUMP THE DISTANCE YOU\'LL HAVE TO TOSS ME',
      aliases: ['tossme']
    })
    this.fileNames = ['toss.mp3']
  }
}

module.exports = Toss