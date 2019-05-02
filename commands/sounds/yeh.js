const BaseSoundCommand = require('../../base_sound_command')

class Yeh extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'yeh',
      group: 'sounds',
      memberName: 'yeh',
      description:  'gniog ti s\'woh yeH'
    })
    this.fileNames = ['yeh.mp3']
  }
}

module.exports = Yeh