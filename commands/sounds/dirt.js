import BaseSoundCommand from '../../base_sound_command.js'

export default class Dirt extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'dirt',
      category: 'sounds',
      description: 'My emptire of dirt'
    })
    this.fileNames = ['dirt.mp3']
  }
}
