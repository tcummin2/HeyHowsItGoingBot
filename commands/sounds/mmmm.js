import BaseSoundCommand from '../../base_sound_command.js'

export default class Mmmm extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'mmmm',
      category: 'sounds',
      description: 'Mmm whatcha mmm whatcha mmm what mmm mmm'
    })
    this.fileNames = ['mmmm.mp3']
  }
}
