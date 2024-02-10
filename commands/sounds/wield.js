import BaseSoundCommand from '../../base_sound_command.js'

export default class Wield extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'wield',
      category: 'sounds',
      description: 'You cannot wield it. None of us can.'
    })
    this.fileNames = ['wield.mp3']
  }
}
