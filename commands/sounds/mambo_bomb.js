import BaseSoundCommand from '../../base_sound_command.js'

export default class MamboBomb extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'mambobomb',
      category: 'sounds',
      description: 'Ladies and gentlemen...'
    })
    this.fileNames = ['mambo-bomb.mp3']
  }
}
