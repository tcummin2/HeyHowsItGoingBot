import BaseSoundCommand from '../../base_sound_command.js'

export default class Load extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'load',
      category: 'sounds',
      description: 'Share the load...',
      aliases: ['share']
    })
    this.fileNames = ['load.mp3']
  }
}
