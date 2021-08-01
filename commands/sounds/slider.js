const BaseSoundCommand = require('../../base_sound_command')

class Slider extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'slider',
      group: 'sounds',
      memberName: 'slider',
      description: 'Yahoo!'
    })
    this.fileNames = ['sm64-slider.mp3']
  }
}

module.exports = Slider