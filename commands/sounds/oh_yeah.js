import BaseSoundCommand from '../../base_sound_command.js'

export default class OhYeah extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'ohyeah',
      category: 'sounds',
      description: 'Oh yeah',
      aliases: ['luigi']
    })
    this.fileNames = ['oh-yeah.mp3', 'oh-yeah-2.mp3', 'oh-yeah-3.mp3']
  }
}
