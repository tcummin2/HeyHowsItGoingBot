import BaseSoundCommand from '../../base_sound_command.js'

export default class Teeph extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'teeph',
      category: 'sounds',
      description: 'Ey yo Teeph'
    })
    this.fileNames = ['teeph.mp3', 'teeph-2.mp3']
  }
}
