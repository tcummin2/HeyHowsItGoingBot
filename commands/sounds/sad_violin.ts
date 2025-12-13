import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class SadViolin extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'sadviolin',
      fullCategory: ['sounds'],
      description: 'Sad violin'
    })
    this.fileNames = ['sad-violin.mp3']
  }
}
