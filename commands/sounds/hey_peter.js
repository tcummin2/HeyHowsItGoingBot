import BaseSoundCommand from '../../base_sound_command.js'

export default class HeyPeter extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'heypeter',
      category: 'sounds',
      description: 'Hey Peter Francis Geraci'
    })
    this.fileNames = ['hey-peter.mp3']
  }
}
