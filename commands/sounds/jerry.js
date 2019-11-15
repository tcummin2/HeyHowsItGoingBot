const fs = require('fs')
const BaseSoundCommand = require('../../base_sound_command')

class Jerry extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'jerry',
      group: 'sounds',
      memberName: 'jerry',
      description: 'Jerry!'
    })
    this.fileNames = fs.readdirSync('./sounds/jerry').map(fileName => `jerry/${fileName}`)
  }
}

module.exports = Jerry