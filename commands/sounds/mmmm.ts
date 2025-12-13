import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Mmmm extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'mmmm',
      fullCategory: ['sounds'],
      description: 'Mmm whatcha mmm whatcha mmm what mmm mmm'
    })
    this.fileNames = ['mmmm.mp3']
  }
}
