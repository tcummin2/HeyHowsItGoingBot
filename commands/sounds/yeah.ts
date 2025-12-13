import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Yeah extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'yeah',
      fullCategory: ['sounds'],
      description: 'YEAHHHHHH'
    })
    this.fileNames = ['yeah.mp3', 'yeah-2.mp3']
  }
}
