import BaseSoundCommand from '../../base_sound_command.js'

export default class Bizza extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bizza',
      category: 'sounds',
      description: 'Bizza',
      aliases: ['🅱️izza']
    })
    this.fileNames = ['bizza.mp3']
  }
}
