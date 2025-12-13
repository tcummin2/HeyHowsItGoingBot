import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Spaghett extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'spaghett',
      fullCategory: ['sounds'],
      description: 'Somebody touch\'a my buttered noodles and ketchup'
    })
    this.fileNames = ['spaghett.mp3']
  }
}
