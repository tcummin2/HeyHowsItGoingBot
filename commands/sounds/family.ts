import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Family extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'family',
      fullCategory: ['sounds'],
      description: 'Family. Family. Family. Family. Family. Family. Family. Family.'
    })
    this.fileNames = ['family.mp3']
  }
}
