import BaseSoundCommand from '../../base_sound_command.js'

export default class DoubleKill extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'doublekill',
      category: 'sounds',
      description: 'Double Kill'
    })
    this.fileNames = ['double-kill.mp3']
  }
}
