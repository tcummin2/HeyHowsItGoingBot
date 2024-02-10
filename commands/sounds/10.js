import BaseSoundCommand from '../../base_sound_command.js'

export default class Ten extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: '10',
      category: 'sounds',
      description: 'That\'s a ten',
      aliases: ['ten']
    })
    this.fileNames = ['10.mp3']
  }
}
