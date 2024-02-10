import BaseSoundCommand from '../../base_sound_command.js'

export default class PriceIsRight extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'priceisright',
      category: 'sounds',
      description: 'Come on down!'
    })
    this.fileNames = ['price-is-right.mp3']
  }
}
