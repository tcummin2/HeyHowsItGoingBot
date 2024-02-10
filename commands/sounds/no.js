import BaseSoundCommand from '../../base_sound_command.js'

export default class No extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'no',
      category: 'sounds',
      description: 'no'
    })
    this.fileNames = ['no.mp3']
  }
}
