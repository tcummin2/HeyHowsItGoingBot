const BaseSoundCommand = require('../../base_sound_command')

class PriceIsRight extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'priceisright',
      group: 'sounds',
      memberName: 'priceisright',
      description: 'Come on down!'
    })
    this.fileNames = ['price-is-right.mp3']
  }
}

module.exports = PriceIsRight