import BaseSoundCommand from '../../base_sound_command.js'

export default class Sigma extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'sigma',
      category: 'sounds',
      description: 'Get on that grindset'
    })
    this.fileNames = ['sigma.mp3']
  }
}
