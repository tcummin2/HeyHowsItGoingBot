import BaseSoundCommand from '../../base_sound_command.js'

export default class Spaghett extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'spaghett',
      category: 'sounds',
      description: 'Somebody touch\'a my buttered noodles and ketchup'
    })
    this.fileNames = ['spaghett.mp3']
  }
}
