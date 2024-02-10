import BaseSoundCommand from '../../base_sound_command.js'

export default class Wait extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'wait',
      category: 'sounds',
      description: 'No no no no no no no wait wait wait wait wait',
      aliases: ['nono', 'nonono', 'punisher']
    })
    this.fileNames = ['wait.mp3']
  }
}
