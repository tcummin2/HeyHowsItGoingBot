import BaseSoundCommand from '../../base_sound_command.js'

export default class Oi extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'oi',
      category: 'sounds',
      description: 'oi'
    })
    this.fileNames = ['oi.mp3', 'oi-2.mp3']
  }
}
