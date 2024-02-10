import BaseSoundCommand from '../../base_sound_command.js'

export default class SadEarrape extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'sadearrape',
      category: 'sounds',
      description: 'Sad voilin EARRAPE'
    })
    this.fileNames = ['sad-violin-earrape.mp3']
  }
}
