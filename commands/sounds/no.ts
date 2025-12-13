import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class No extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'no',
      fullCategory: ['sounds'],
      description: 'no'
    })
    this.fileNames = ['no.mp3']
  }
}
