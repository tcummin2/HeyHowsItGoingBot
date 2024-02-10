import BaseSoundCommand from '../../base_sound_command.js'

export default class XFiles extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'xfiles',
      category: 'sounds',
      description: 'Illuminati confirmed'
    })
    this.fileNames = ['x-files.mp3']
  }
}
