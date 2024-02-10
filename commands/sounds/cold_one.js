import BaseSoundCommand from '../../base_sound_command.js'

export default class ColdOne extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'coldone',
      category: 'sounds',
      description: 'Das a cold one'
    })
    this.fileNames = ['cold-one.mp3']
  }
}
