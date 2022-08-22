const BaseSoundCommand = require('../../base_sound_command')

class Sigma extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sigma',
      group: 'sounds',
      memberName: 'sigma',
      description: 'Get on that grindset'
    })
    this.fileNames = ['sigma.mp3']
  }
}

module.exports = Sigma