import BaseSoundCommand from '../../base_sound_command.js'

export default class Betrayal extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'betrayal',
      category: 'sounds',
      description: 'Halo 3 Betrayal'
    })
    this.fileNames = ['betrayal.mp3']
  }
}
