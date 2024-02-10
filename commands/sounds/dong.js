import BaseSoundCommand from '../../base_sound_command.js'

export default class Dong extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'dong',
      category: 'sounds',
      description: '🍆',
      aliases: ['🍆']
    })
    this.fileNames = ['dong.mp3']
  }
}
