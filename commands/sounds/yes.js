import BaseSoundCommand from '../../base_sound_command.js'

export default class Yes extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'yes',
      category: 'sounds',
      description: 'yes'
    })
    this.fileNames = ['yes.mp3']
  }
}
