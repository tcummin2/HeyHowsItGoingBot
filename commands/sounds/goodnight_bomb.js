import BaseSoundCommand from '../../base_sound_command.js'

export default class GoodnightBomb extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'goodnightbomb',
      category: 'sounds',
      description: 'Goodnight girl, I\'ll see ya tomorrow'
    })
    this.fileNames = ['goodnight_bomb.mp3']
  }
}
