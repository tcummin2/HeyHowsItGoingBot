import BaseSoundCommand from '../../base_sound_command.js'

export default class Gandalf extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'gandalf',
      category: 'sounds',
      description: 'Fly you fools'
    })
    this.fileNames = ['gandalf.mp3', 'gandalf-2.mp3']
  }
}
