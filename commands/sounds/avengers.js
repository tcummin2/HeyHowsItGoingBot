import BaseSoundCommand from '../../base_sound_command.js'

export default class Avengers extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'avengers',
      category: 'sounds',
      description: 'Bummmmmm, bum bum BUM BUMMMMMMMMMM BUMMM BUMMM BUMMMMMM'
    })
    this.fileNames = ['avengers.mp3']
  }
}
