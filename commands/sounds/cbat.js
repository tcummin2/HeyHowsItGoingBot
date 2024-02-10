import BaseSoundCommand from '../../base_sound_command.js'

export default class Cbat extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'cbat',
      category: 'sounds',
      description: 'Cbat'
    })
    this.fileNames = ['cbat.mp3']
  }
}
