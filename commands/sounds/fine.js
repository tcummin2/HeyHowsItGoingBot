import BaseSoundCommand from '../../base_sound_command.js'

export default class Fine extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'fine',
      category: 'sounds',
      description: 'You just have to say you\'re fine'
    })
    this.fileNames = ['fine.mp3']
  }
}
