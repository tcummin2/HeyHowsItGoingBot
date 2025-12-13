import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Exclamation extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: '!',
      fullCategory: ['sounds'],
      description: '!',
      aliases: ['metalgear']
    })
    this.fileNames = ['!.mp3']
  }
}
