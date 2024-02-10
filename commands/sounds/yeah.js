import BaseSoundCommand from '../../base_sound_command.js'

export default class Yeah extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'yeah',
      category: 'sounds',
      description: 'YEAHHHHHH'
    })
    this.fileNames = ['yeah.mp3', 'yeah-2.mp3']
  }
}
