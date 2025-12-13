import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Matter extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'matter',
      fullCategory: ['sounds'],
      description: 'It don\'t matter. None of this matters',
      aliases: ['itdontmatter']
    })
    this.fileNames = ['matter.mp3']
  }
}
