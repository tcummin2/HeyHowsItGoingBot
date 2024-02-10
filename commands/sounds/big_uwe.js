import BaseSoundCommand from '../../base_sound_command.js'

export default class BigUwe extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'biguwe',
      category: 'sounds',
      description: 'UUUUUWWWWEEEE'
    })
    this.fileNames = ['big_uwe.mp3']
  }
}
