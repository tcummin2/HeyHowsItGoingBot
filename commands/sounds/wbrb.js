import BaseSoundCommand from '../../base_sound_command.js'

export default class Wbrb extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'wbrb',
      category: 'sounds',
      description: 'We\'ll be right back'
    })
    this.fileNames = ['wbrb.mp3']
  }
}
