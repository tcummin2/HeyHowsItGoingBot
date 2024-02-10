import BaseSoundCommand from '../../base_sound_command.js'

export default class Hermione extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'hermione',
      category: 'sounds',
      description: 'Not me, not Hermione, YOU.',
      aliases: ['notme', 'nothermione']
    })
    this.fileNames = ['hermione.mp3']
  }
}
