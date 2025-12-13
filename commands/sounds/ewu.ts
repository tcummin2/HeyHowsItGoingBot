import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Ewu extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'ewu',
      fullCategory: ['sounds'],
      description: 'eeeewwwwuuuu'
    })
    this.fileNames = ['ewu.mp3']
  }
}
