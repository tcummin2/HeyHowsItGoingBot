const fs = require('fs')
const BaseSoundCommand = require('../../base_sound_command')

class Hey extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'hey',
      group: 'hey',
      memberName: 'hey',
      description: 'Hey how\'s it going'
    })
    this.defaultFile = 'hey.mp3'
    this.fileNames = [...new Set([this.defaultFile, ...fs.readdirSync('./sounds/hey')])]
      .map(fileName => `hey/${fileName}`)
  }
}

module.exports = Hey