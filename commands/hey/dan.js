import BaseSoundCommand from '../../base_sound_command.js'

export default class DanHey extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'danhey',
      category: 'sounds',
      description: 'Dan'
    })
    this.fileNames = ['hey/dan.mp3']
  }
}
