const BaseSoundCommand = require('../../base_image_command')

class Bobby extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'bobby',
      group: 'sounds',
      memberName: 'bobby',
      description: 'Bobby C. Annoli at your service'
    })
    this.fileNames = ['bobby.jpg']
  }
}

module.exports = Bobby