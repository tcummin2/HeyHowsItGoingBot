import BaseSoundCommand from '../../base_sound_command.js'

export default class Fell extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'fell',
      category: 'sounds',
      description: 'he fell'
    })
    this.fileNames = ['fell.mp3']
  }
}
