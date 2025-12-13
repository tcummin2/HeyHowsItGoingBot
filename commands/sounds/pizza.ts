import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Pizza extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'pizza',
      fullCategory: ['sounds'],
      description: 'Pizza'
    })
    this.fileNames = ['pizza.mp3']
  }
}
