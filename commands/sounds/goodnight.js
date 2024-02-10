import BaseSoundCommand from '../../base_sound_command.js'

export default class Goodnight extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'goodnight',
      category: 'sounds',
      description: 'Goodnight girl, I\'ll see ya tomorrow'
    })
    this.fileNames = ['goodnight.mp3']
  }
}
