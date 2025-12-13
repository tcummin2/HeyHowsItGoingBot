import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Betrayal extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'betrayal',
      fullCategory: ['sounds'],
      description: 'Halo 3 Betrayal'
    })
    this.fileNames = ['betrayal.mp3']
  }
}
