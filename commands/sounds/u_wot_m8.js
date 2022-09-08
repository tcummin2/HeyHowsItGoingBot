const BaseSoundCommand = require('../../base_sound_command')

class UWotM8 extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'uwotm8',
      group: 'sounds',
      memberName: 'uwotm8',
      description: 'U wot, m8?',
      aliases: ['wot', 'uwot', 'm8']
    })
    this.fileNames = ['u-wot-m8.mp3', 'u-wot-m8-2.mp3', 'u-wot-m8-3.mp3']
  }
}

module.exports = UWotM8