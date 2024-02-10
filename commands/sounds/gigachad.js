import BaseSoundCommand from '../../base_sound_command.js'

export default class Gigachad extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'gigachad',
      category: 'sounds',
      description: 'Yes.',
      aliases: ['chad', 'chadd']
    })
    this.fileNames = ['gigachad.mp3']
  }
}
