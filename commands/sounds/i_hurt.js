import BaseSoundCommand from '../../base_sound_command.js'

export default class IHurt extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'ihurt',
      category: 'sounds',
      description: 'I hurt'
    })
    this.fileNames = ['i-hurt.mp3']
  }
}
