import BaseSoundCommand from '../../base_sound_command.js'

export default class Michael extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'michael',
      category: 'sounds',
      description: 'MICHAEL'
    })
    this.fileNames = ['michael.mp3', 'michael-2.mp3', 'michael-3.mp3', 'michael-4.mp3', 'michael-5.mp3', 'michael-all.mp3', 'michael-loud.mp3']
  }
}
