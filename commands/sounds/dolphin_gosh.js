import BaseSoundCommand from '../../base_sound_command.js'

export default class DolphinGosh extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'dolphingosh',
      category: 'sounds',
      description: '*Dolphin noise from the heavens*',
      aliases: ['🐬gosh']
    })
    this.fileNames = ['dolphin-gosh.mp3']
  }
}
