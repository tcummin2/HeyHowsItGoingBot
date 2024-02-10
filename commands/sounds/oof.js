import BaseSoundCommand from '../../base_sound_command.js'

export default class Oof extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'oof',
      category: 'sounds',
      description: 'Big oof'
    })
    this.fileNames = ['oof.mp3', 'oof-2.mp3']
  }
}
