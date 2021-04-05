const BaseSoundCommand = require('../../base_sound_command')

class XFiles extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'xfiles',
      group: 'sounds',
      memberName: 'xfiles',
      description: 'Illuminati confirmed'
    })
    this.fileNames = ['x-files.mp3']
  }
}

module.exports = XFiles