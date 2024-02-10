import BaseSoundCommand from '../../base_sound_command.js'

export default class Daytona extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'daytona',
      category: 'sounds',
      description: 'DAYTONAAAAAAAA'
    })
    this.fileNames = ['daytona.mp3', 'daytona-2.mp3']
  }
}
