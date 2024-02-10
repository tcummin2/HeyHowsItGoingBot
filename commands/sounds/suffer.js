import BaseSoundCommand from '../../base_sound_command.js'

export default class Suffer extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'suffer',
      category: 'sounds',
      description: 'Why are we still here? Just to suffer?',
      aliases: ['whyarewestillhere']
    })
    this.fileNames = ['suffer.mp3']
  }
}
