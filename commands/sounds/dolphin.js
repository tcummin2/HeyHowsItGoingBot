import BaseSoundCommand from '../../base_sound_command.js'

export default class Dolphin extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'dolphin',
      category: 'sounds',
      description: '*Dolphin noise*',
      aliases: ['🐬']
    })
    this.fileNames = ['dolphin.mp3', 'dolphin-2.mp3']
  }
}
