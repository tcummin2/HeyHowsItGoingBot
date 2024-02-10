import BaseSoundCommand from '../../base_sound_command.js'

export default class NewPhone extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'newphone',
      category: 'sounds',
      description: 'New phone who dis'
    })
    this.fileNames = ['newphone.mp3']
  }
}
