import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Mine extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'mine',
      fullCategory: ['sounds'],
      description: 'And they call it a mine. A MINE!'
    })
    this.fileNames = ['mine.mp3', 'mine-2.mp3']
  }
}
