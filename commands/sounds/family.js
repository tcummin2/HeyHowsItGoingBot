import BaseSoundCommand from '../../base_sound_command.js'

export default class Family extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'family',
      category: 'sounds',
      description: 'Family. Family. Family. Family. Family. Family. Family. Family.'
    })
    this.fileNames = ['family.mp3']
  }
}
