import BaseSoundCommand from '../../base_sound_command.js'

export default class HarrisonFord extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'harrisonford',
      category: 'sounds',
      description: 'Harrison Ford.',
      aliases: ['hf']
    })
    this.fileNames = ['harrison-ford.mp3']
  }
}
