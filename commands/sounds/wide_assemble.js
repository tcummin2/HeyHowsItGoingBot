import BaseSoundCommand from '../../base_sound_command.js'

export default class WideAssemble extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'wideassemble',
      category: 'sounds',
      description: 'You know.'
    })
    this.fileNames = ['wide-assemble.mp3']
  }
}
