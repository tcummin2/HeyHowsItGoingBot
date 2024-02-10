import BaseSoundCommand from '../../base_sound_command.js'

export default class Bells extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bells',
      category: 'sounds',
      description: 'Bells.'
    })
    this.fileNames = ['bells.mp3']
  }
}
