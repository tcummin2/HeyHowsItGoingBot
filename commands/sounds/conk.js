import BaseSoundCommand from '../../base_sound_command.js'

export default class Conk extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'conk',
      category: 'sounds',
      description: 'We\'re all out of bepis'
    })
    this.fileNames = ['conk.mp3']
  }
}
