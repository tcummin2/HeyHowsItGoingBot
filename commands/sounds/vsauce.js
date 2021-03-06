const BaseSoundCommand = require('../../base_sound_command')

class VSauce extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'vsauce',
      group: 'sounds',
      memberName: 'vsauce',
      description: 'Hey, VSauce! Michael Here'
    })
    this.fileNames = ['vsauce.mp3']
  }
}

module.exports = VSauce