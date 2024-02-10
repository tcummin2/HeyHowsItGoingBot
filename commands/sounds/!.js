import BaseSoundCommand from '../../base_sound_command.js'

export default class Exclamation extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: '!',
      category: 'sounds',
      description: '!',
      aliases: ['metalgear']
    })
    this.fileNames = ['!.mp3']
  }
}
