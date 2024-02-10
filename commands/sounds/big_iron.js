import BaseSoundCommand from '../../base_sound_command.js'

export default class BigIron extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bigiron',
      category: 'sounds',
      description: 'BIGIRONONHISHIP'
    })
    this.fileNames = ['big-iron.mp3']
  }
}
