import BaseSoundCommand from '../../base_sound_command.js'

export default class Suicide extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'suicide',
      category: 'sounds',
      description: 'Halo 3 Suicide'
    })
    this.fileNames = ['suicide.mp3']
  }
}
