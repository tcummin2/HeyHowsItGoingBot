import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Snories extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'snories',
      fullCategory: ['sounds'],
      description: 'Just some snories'
    })
    this.fileNames = ['snories.mp3']
  }
}
