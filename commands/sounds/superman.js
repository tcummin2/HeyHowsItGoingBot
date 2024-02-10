import BaseSoundCommand from '../../base_sound_command.js'

export default class Superman extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'superman',
      category: 'sounds',
      description: 'So here I am...',
      aliases: ['tonyhawk']
    })
    this.fileNames = ['superman.mp3']
  }
}
