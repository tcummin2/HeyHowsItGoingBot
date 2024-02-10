import BaseSoundCommand from '../../base_sound_command.js'

export default class YesSir extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'yessir',
      category: 'sounds',
      description: 'How was everybody\'s day'
    })
    this.fileNames = ['yessir.mp3']
  }
}
