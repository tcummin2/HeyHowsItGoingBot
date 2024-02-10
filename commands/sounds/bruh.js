import BaseSoundCommand from '../../base_sound_command.js'

export default class Bruh extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bruh',
      category: 'sounds',
      description: 'bruh'
    })
    this.fileNames = ['bruh.mp3']
  }
}
