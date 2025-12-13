import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class CoffinDance extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'coffindance',
      fullCategory: ['sounds'],
      description: 'Coffin dance',
      aliases: ['coffin']
    })
    this.fileNames = ['coffin-dance.mp3']
  }
}
