import BaseSoundCommand from '../../base_sound_command.js'

export default class Scoin extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'scoin',
      category: 'sounds',
      description: '\'scoin on, boys?',
      aliases: ['scoin', 'sgoin']
    })
    this.fileNames = ['scoin.mp3']
  }
}
