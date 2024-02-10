import BaseSoundCommand from '../../base_sound_command.js'

export default class Sir extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'sir',
      category: 'sounds',
      description: 'SIRRRRRRRRRRRRRRRRRRRRRR'
    })
    this.fileNames = ['sir.mp3']
  }
}
