import BaseSoundCommand from '../../base_sound_command.js'

export default class WakeTeephUp extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'waketeephup',
      category: 'sounds',
      description: 'EY YO TEEPH'
    })
    this.fileNames = ['teeph-loud.mp3', 'teeph-loud-2.mp3']
  }
}
