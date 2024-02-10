import BaseSoundCommand from '../../base_sound_command.js'

export default class Jimbo extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'jimbo',
      category: 'sounds',
      description: 'Wuss poppin Jimbo'
    })
    this.fileNames = ['jimbo.mp3']
  }
}
