const BaseSoundCommand = require('../../base_image_command')

class Grant extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'grant',
      group: 'image',
      memberName: 'grant',
      description: 'Grant R. Avioli at your service'
    })
    this.fileNames = ['grant.jpg']
  }
}

module.exports = Grant