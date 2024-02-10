import BaseSoundCommand from '../../base_sound_command.js'

export default class Nyuk extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'nyuk',
      category: 'sounds',
      description: 'NYUK NYUK NYUK NYUK'
    })
    this.fileNames = ['nyuk.mp3']
  }
}
