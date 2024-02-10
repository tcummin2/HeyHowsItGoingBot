import BaseSoundCommand from '../../base_sound_command.js'

export default class Untitled extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'untitled',
      category: 'sounds',
      description: 'How could this happen to me?',
      aliases: ['howcouldthishappentome']
    })
    this.fileNames = ['untitled.mp3']
  }
}
