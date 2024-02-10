import BaseSoundCommand from '../../base_sound_command.js'

export default class SadAirhorn extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'sadairhorn',
      category: 'sounds',
      description: 'Sad airhorn'
    })
    this.fileNames = ['sad-airhorn.mp3']
  }
}
