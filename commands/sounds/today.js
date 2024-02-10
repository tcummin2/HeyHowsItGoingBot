import BaseSoundCommand from '../../base_sound_command.js'

export default class Today extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'today',
      category: 'sounds',
      description: 'Today'
    })
    this.fileNames = ['today.mp3']
  }
}
