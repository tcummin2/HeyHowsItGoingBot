import BaseSoundCommand from '../../base_sound_command.js'

export default class Matter extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'matter',
      category: 'sounds',
      description: 'It don\'t matter. None of this matters',
      aliases: ['itdontmatter']
    })
    this.fileNames = ['matter.mp3']
  }
}
