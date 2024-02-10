import BaseSoundCommand from '../../base_sound_command.js'

export default class CoffinDance extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'coffindance',
      category: 'sounds',
      description: 'Coffin dance',
      aliases: ['coffin']
    })
    this.fileNames = ['coffin-dance.mp3']
  }
}
