import BaseSoundCommand from '../../base_sound_command.js'

export default class Damage extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'damage',
      category: 'sounds',
      description: 'NOW THAT\'S A LOT OF DAMAGE'
    })
    this.fileNames = ['damage.mp3', 'damage-2.mp3']
  }
}
