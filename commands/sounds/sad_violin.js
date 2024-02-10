import BaseSoundCommand from '../../base_sound_command.js'

export default class SadViolin extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'sadviolin',
      category: 'sounds',
      description: 'Sad violin'
    })
    this.fileNames = ['sad-violin.mp3']
  }
}
