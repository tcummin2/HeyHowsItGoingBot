import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class MamboBomb extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'mambobomb',
      fullCategory: ['sounds'],
      description: 'Ladies and gentlemen...'
    })
    this.fileNames = ['mambo-bomb.mp3']
  }
}
