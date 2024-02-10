import BaseSoundCommand from '../../base_sound_command.js'

export default class FarHey extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'farhey',
      category: 'hey',
      description: '............hey'
    })
    this.fileNames = ['hey/far.mp3']
  }
}
