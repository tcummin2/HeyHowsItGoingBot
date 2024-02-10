import BaseSoundCommand from '../../base_sound_command.js'

export default class Mine extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'mine',
      category: 'sounds',
      description: 'And they call it a mine. A MINE!'
    })
    this.fileNames = ['mine.mp3', 'mine-2.mp3']
  }
}
