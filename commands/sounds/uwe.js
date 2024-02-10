import BaseSoundCommand from '../../base_sound_command.js'

export default class Uwe extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'uwe',
      category: 'sounds',
      description: 'uuuuwwwweeee'
    })
    this.fileNames = ['uwe.mp3']
  }
}
