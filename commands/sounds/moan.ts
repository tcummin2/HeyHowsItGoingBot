import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Moan extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'moan',
      fullCategory: ['sounds'],
      description: 'This guy moaned at least this loud',
      aliases: ['loud']
    })
    this.fileNames = ['moan.mp3']
  }
}
