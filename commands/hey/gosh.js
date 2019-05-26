const BaseSoundCommand = require('../../base_sound_command')

class HeyGosh extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'heygosh',
      group: 'hey',
      memberName: 'heygosh',
      description: 'HHHHHHEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYY'
    })
    this.fileNames = ['hey/gosh.mp3']
  }
}

module.exports = HeyGosh