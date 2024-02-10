import BaseSoundCommand from '../../base_sound_command.js'

export default class Peter extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'peter',
      category: 'sounds',
      description: 'Attorney Peter Francis Geraci',
      aliases: ['geraci']
    })
    this.fileNames = ['peter.mp3']
  }
}
