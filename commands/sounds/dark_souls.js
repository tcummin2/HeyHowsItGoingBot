import BaseSoundCommand from '../../base_sound_command.js'

export default class DarkSouls extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'darksouls',
      category: 'sounds',
      description: 'Thank you Dark Souls.'
    })
    this.fileNames = ['dark-souls.mp3', 'dark-souls-2.mp3']
  }
}
