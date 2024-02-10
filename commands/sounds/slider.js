import BaseSoundCommand from '../../base_sound_command.js'

export default class Slider extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'slider',
      category: 'sounds',
      description: 'Yahoo!'
    })
    this.fileNames = ['sm64-slider.mp3']
  }
}
