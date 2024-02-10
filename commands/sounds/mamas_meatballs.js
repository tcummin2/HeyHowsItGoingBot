import BaseSoundCommand from '../../base_sound_command.js'

export default class MamasMeatballs extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'meatballs',
      category: 'sounds',
      description: 'Nothin\' beats mama\'s meatballs'
    })
    this.fileNames = ['mamas-meatballs.mp3', 'mamas-meatballs-2.mp3', 'nothin-better.mp3']
  }
}
