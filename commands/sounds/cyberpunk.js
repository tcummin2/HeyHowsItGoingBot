import BaseSoundCommand from '../../base_sound_command.js'

export default class Cyberpunk extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'cyberpunk',
      category: 'sounds',
      description: 'Keanu'
    })
    this.fileNames = ['cyberpunk.mp3']
  }
}
