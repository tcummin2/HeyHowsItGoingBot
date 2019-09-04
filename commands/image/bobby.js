const BaseImageCommand = require('../../base_image_command')

class Bobby extends BaseImageCommand {
  constructor(client) {
    super(client, {
      name: 'bobby',
      group: 'image',
      memberName: 'bobby',
      description: 'Bobby C. Annoli at your service'
    })
    this.fileNames = ['bobby.jpg']
  }
}

module.exports = Bobby