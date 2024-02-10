import BaseSoundCommand from '../../base_sound_command.js'

export default class Hurt extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'hurt',
      category: 'sounds',
      description: 'I hurt myself today'
    })
    this.fileNames = ['hurt.mp3']
  }
}
