const BaseSoundCommand = require('../../base_sound_command')

class WakeTeephUp extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'waketeephup',
      group: 'sounds',
      memberName: 'waketeephup',
      description: 'EY YO TEEPH'
    })
    this.fileNames = ['teeph-loud.mp3']
  }
}

module.exports = WakeTeephUp