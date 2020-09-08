const BaseSoundCommand = require('../../base_sound_command')

class Uwe extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'uwe',
      group: 'sounds',
      memberName: 'uwe',
      description: 'uuuuwwwweeee'
    })
    this.fileNames = ['uwe.mp3']
  }
}

module.exports = Uwe