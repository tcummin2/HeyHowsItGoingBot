import BaseSoundCommand from '../../base_sound_command.js'

export default class B extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'b',
      category: 'sounds',
      description: '🅱️',
      aliases: ['🅱️']
    })
    this.fileNames = ['b.mp3']
  }
}
