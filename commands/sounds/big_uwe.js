const BaseSoundCommand = require('../../base_sound_command')

class BigUwe extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'biguwe',
      group: 'sounds',
      memberName: 'biguwe',
      description: 'UUUUUWWWWEEEE'
    })
    this.fileNames = ['big_uwe.mp3']
  }
}

module.exports = BigUwe