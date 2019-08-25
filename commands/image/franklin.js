const BaseSoundCommand = require('../../base_image_command')

class Franklin extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'franklin',
      group: 'image',
      memberName: 'franklin',
      description: 'Franklin S. Paghetti at your service'
    })
    this.fileNames = ['franklin.jpg']
  }
}

module.exports = Franklin