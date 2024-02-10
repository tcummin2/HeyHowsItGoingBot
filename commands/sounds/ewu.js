import BaseSoundCommand from '../../base_sound_command.js'

export default class Ewu extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'ewu',
      category: 'sounds',
      description: 'eeeewwwwuuuu'
    })
    this.fileNames = ['ewu.mp3']
  }
}
