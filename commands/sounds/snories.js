import BaseSoundCommand from '../../base_sound_command.js'

export default class Snories extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'snories',
      category: 'sounds',
      description: 'Just some snories'
    })
    this.fileNames = ['snories.mp3']
  }
}
