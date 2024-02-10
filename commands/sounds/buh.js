import BaseSoundCommand from '../../base_sound_command.js'

export default class Buh extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'buh',
      category: 'sounds',
      description: 'buh'
    })
    this.fileNames = ['buh.mp3', 'buh-loud.mp3', 'buh-far.mp3']
  }
}
