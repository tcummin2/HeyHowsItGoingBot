import BaseSoundCommand from '../../base_sound_command.js'

export default class ICantBelieveThis extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'icantbelievethis',
      category: 'sounds',
      description: 'I can\'t believe this',
      aliases: ['icantbelieve', 'cantbelieve', 'believe']
    })
    this.fileNames = ['i-cant-believe-this.mp3']
  }
}
