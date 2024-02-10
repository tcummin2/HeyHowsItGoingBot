import BaseSoundCommand from '../../base_sound_command.js'

export default class Avengabomb extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'avengabomb',
      category: 'sounds',
      description: 'Mom come pick me up I\'m scared'
    })
    this.fileNames = ['avengabomb.mp3']
  }
}
