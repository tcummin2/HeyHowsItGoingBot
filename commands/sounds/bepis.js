import BaseSoundCommand from '../../base_sound_command.js'

export default class Bepis extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bepis',
      category: 'sounds',
      description: 'Gimme the bepis'
    })
    this.fileNames = ['bepis.mp3', 'bepis-2.mp3', 'bepis-3.mp3', 'bepis-4.mp3', 'bepis-5.mp3', 'bepis-6.mp3', 'bepis-7.mp3']
  }
}
