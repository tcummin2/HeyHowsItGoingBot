import BaseSoundCommand from '../../base_sound_command.js'

export default class Slurp extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'slurp',
      category: 'sounds',
      description: 'Numnumnumnumnumnum'
    })
    this.fileNames = ['slurp.mp3', 'slurp-2.mp3', 'slurp-3.mp3', 'slurp-4.mp3', 'slurp-5.mp3']
  }
}
