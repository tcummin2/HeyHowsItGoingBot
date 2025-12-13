import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class OhYeah extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'ohyeah',
      fullCategory: ['sounds'],
      description: 'Oh yeah',
      aliases: ['luigi']
    })
    this.fileNames = ['oh-yeah.mp3', 'oh-yeah-2.mp3', 'oh-yeah-3.mp3']
  }
}
