import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Bells extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bells',
      fullCategory: ['sounds'],
      description: 'Bells.'
    })
    this.fileNames = ['bells.mp3']
  }
}
