import BaseSoundCommand from '../../base_sound_command.js'

export default class Assemble extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'assemble',
      category: 'sounds',
      description: 'BUMMMMMM, BUM BUM BUM BUMMMMMMMMMM BUMMM BUMMM BUMMMMMM'
    })
    this.fileNames = ['assemble.mp3']
  }
}
