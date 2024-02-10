import BaseSoundCommand from '../../base_sound_command.js'

export default class JpHey extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'jphey',
      category: 'hey',
      description: 'JP'
    })
    this.fileNames = ['hey/jp.mp3', 'hey/jp-2.mp3']
  }
}
