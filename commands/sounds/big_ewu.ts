import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class BigEwu extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bigewu',
      fullCategory: ['sounds'],
      description: 'EEEEWWWWUUUU'
    })
    this.fileNames = ['big_ewu.mp3']
  }
}
