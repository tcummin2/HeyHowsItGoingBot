import BaseSoundCommand from '../../base_sound_command.js'

export default class Woo extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'woo',
      category: 'sounds',
      description: 'WOO YEAH BAYBEEEE',
      aliases: ['charlie', 'cr1tikal']
    })
    this.fileNames = ['woo.mp3', 'woo-2.mp3']
  }
}
