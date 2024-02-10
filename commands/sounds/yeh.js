import BaseSoundCommand from '../../base_sound_command.js'

export default class Yeh extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'yeh',
      category: 'sounds',
      description: 'gniog ti s\'woh yeH'
    })
    this.fileNames = ['yeh.mp3']
  }
}
