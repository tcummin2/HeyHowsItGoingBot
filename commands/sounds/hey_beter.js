import BaseSoundCommand from '../../base_sound_command.js'

export default class HeyBeter extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'heybeter',
      category: 'sounds',
      description: 'Hey 🅱️eter'
    })
    this.fileNames = ['hey-beter.mp3', 'hey-beter-ethereal.mp3']
  }
}
