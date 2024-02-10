import BaseSoundCommand from '../../base_sound_command.js'

export default class Io extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'io',
      category: 'sounds',
      description: 'Io'
    })
    this.fileNames = ['io.mp3', 'io-2.mp3']
  }
}
