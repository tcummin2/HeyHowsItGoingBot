import BaseSoundCommand from '../../base_sound_command.js'

export default class Mmm extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'mmm',
      category: 'sounds',
      description: 'Mmm whatcha say'
    })
    this.fileNames = ['mmm.mp3']
  }
}
