import BaseSoundCommand from '../../base_sound_command.js'

export default class BigEwu extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bigewu',
      category: 'sounds',
      description: 'EEEEWWWWUUUU'
    })
    this.fileNames = ['big_ewu.mp3']
  }
}
