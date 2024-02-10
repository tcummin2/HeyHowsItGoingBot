import BaseSoundCommand from '../../base_sound_command.js'

export default class LoudHey extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'loudhey',
      category: 'hey',
      description: 'JP'
    })
    this.fileNames = ['hey/loud.mp3', 'hey/loud-2.mp3']
  }
}
