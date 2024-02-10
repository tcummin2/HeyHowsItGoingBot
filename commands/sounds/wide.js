import BaseSoundCommand from '../../base_sound_command.js'

export default class Wide extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'wide',
      category: 'sounds',
      description: 'ｗｉｄｅ',
      aliases: ['putin']
    })
    this.fileNames = ['wide.mp3']
  }
}
