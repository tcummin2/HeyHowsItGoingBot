import BaseSoundCommand from '../../base_sound_command.js'

export default class Pizza extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'pizza',
      category: 'sounds',
      description: 'Pizza'
    })
    this.fileNames = ['pizza.mp3']
  }
}
