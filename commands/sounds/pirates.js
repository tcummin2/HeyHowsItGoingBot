import BaseSoundCommand from '../../base_sound_command.js'

export default class Pirates extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'pirates',
      category: 'sounds',
      description: 'That\'s got to be the worst pirate I\'ve ever seen.'
    })
    this.fileNames = ['pirates.mp3']
  }
}
