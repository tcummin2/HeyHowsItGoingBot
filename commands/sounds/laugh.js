const fs = require('fs')
const BaseSoundCommand = require('../../base_sound_command')

class Laugh extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'laugh',
      group: 'sounds',
      memberName: 'laugh',
      description: 'Laugh track'
    })
    this.fileNames = fs.readdirSync('./sounds/laugh').map(fileName => `laugh/${fileName}`)
  }
}

module.exports = Laugh