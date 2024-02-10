import BaseSoundCommand from '../../base_sound_command.js'

export default class Macaroni extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'macaroni',
      category: 'sounds',
      description: 'Macaroni, with the chicken strips',
      aliases: ['chickenstrips', 'uh']
    })
    this.fileNames = ['macaroni.mp3', 'macaroni-2.mp3']
  }
}
