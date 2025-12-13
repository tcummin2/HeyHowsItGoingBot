import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class BigUwe extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'biguwe',
      fullCategory: ['sounds'],
      description: 'UUUUUWWWWEEEE'
    })
    this.fileNames = ['big_uwe.mp3']
  }
}
