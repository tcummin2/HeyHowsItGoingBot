import BaseSoundCommand from '../../base_sound_command.js'

export default class Enya extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'enya',
      category: 'sounds',
      description: 'Who can say where the road goes?'
    })
    this.fileNames = ['enya.mp3', 'enya-2.mp3']
  }
}
