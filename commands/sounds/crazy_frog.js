import BaseSoundCommand from '../../base_sound_command.js'

export default class CrazyFrog extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'crazyfrog',
      category: 'sounds',
      description: 'BRING DING DING DING DING DING'
    })
    this.fileNames = ['crazy-frog.mp3', 'crazy-frog-2.mp3']
  }
}
