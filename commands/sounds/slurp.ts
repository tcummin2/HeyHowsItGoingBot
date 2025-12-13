import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Slurp extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'slurp',
      fullCategory: ['sounds'],
      description: 'Numnumnumnumnumnum'
    })
    this.fileNames = ['slurp.mp3', 'slurp-2.mp3', 'slurp-3.mp3', 'slurp-4.mp3', 'slurp-5.mp3']
  }
}
