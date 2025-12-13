import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class BigSmoke extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bigsmoke',
      fullCategory: ['sounds'],
      description: 'OHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
    })
    this.fileNames = ['big-smoke.mp3']
  }
}
