import BaseSoundCommand from '../../base_sound_command.js'

export default class Moan extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'moan',
      category: 'sounds',
      description: 'This guy moaned at least this loud',
      aliases: ['loud']
    })
    this.fileNames = ['moan.mp3']
  }
}
