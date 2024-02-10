import BaseSoundCommand from '../../base_sound_command.js'

export default class Kabuki extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'kabuki',
      category: 'sounds',
      description: 'YOOOOOOOOOOOOOOOOOOOO',
      aliases: ['not']
    })
    this.fileNames = ['kabuki.mp3', 'kabuki-2.mp3']
  }
}
