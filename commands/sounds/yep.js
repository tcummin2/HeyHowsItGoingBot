import BaseSoundCommand from '../../base_sound_command.js'

export default class Yep extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'yep',
      category: 'sounds',
      description: '*Record Scratch* *Freeze Frame* Yep, that\'s me'
    })
    this.fileNames = ['yep.mp3']
  }
}
