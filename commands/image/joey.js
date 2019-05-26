const BaseSoundCommand = require('../../base_image_command')

class Joey extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'joey',
      group: 'sounds',
      memberName: 'joey',
      description: 'Joey M. Eatballs at your service'
    })
    this.fileNames = ['joey.png']
  }
}

module.exports = Joey