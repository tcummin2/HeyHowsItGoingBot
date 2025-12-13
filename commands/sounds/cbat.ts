import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Cbat extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'cbat',
      fullCategory: ['sounds'],
      description: 'Cbat'
    })
    this.fileNames = ['cbat.mp3']
  }
}
