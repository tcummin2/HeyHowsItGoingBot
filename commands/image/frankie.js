const BaseImageCommand = require('../../base_image_command')

class Frankie extends BaseImageCommand {
  constructor(client) {
    super(client, {
      name: 'frankie',
      group: 'image',
      memberName: 'frankie',
      description: 'Frankie L. Sagna at your service'
    })
    this.fileNames = ['frankie.jpg']
  }
}

module.exports = Frankie