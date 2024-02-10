import BaseSoundCommand from '../../base_sound_command.js'

export default class Nfl extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'nfl',
      category: 'sounds',
      description: 'Cue the dancing robot'
    })
    this.fileNames = ['nfl.mp3']
  }
}
