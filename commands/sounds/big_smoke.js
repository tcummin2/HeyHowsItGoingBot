import BaseSoundCommand from '../../base_sound_command.js'

export default class BigSmoke extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bigsmoke',
      category: 'sounds',
      description: 'OHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
    })
    this.fileNames = ['big-smoke.mp3']
  }
}
