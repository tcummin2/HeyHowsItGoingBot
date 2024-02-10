import BaseSoundCommand from '../../base_sound_command.js'

export default class Pagliacci extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'pagliacci',
      category: 'sounds',
      description: 'Italian Opera',
      aliases: ['opera']
    })
    this.fileNames = ['pagliacci.mp3']
  }
}
