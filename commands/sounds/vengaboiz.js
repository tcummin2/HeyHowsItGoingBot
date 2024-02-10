import BaseSoundCommand from '../../base_sound_command.js'

export default class Vengaboiz extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vengaboiz',
      category: 'sounds',
      description: 'We like to party'
    })
    this.fileNames = ['vengaboiz.mp3']
  }
}
