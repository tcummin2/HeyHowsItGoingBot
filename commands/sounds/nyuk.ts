import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Nyuk extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'nyuk',
      fullCategory: ['sounds'],
      description: 'NYUK NYUK NYUK NYUK'
    })
    this.fileNames = ['nyuk.mp3']
  }
}
