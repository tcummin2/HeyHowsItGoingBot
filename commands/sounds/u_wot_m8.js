import BaseSoundCommand from '../../base_sound_command.js'

export default class UWotM8 extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'uwotm8',
      category: 'sounds',
      description: 'U wot, m8?',
      aliases: ['wot', 'uwot', 'm8']
    })
    this.fileNames = ['u-wot-m8.mp3', 'u-wot-m8-2.mp3', 'u-wot-m8-3.mp3']
  }
}
