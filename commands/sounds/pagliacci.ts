import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Pagliacci extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'pagliacci',
      fullCategory: ['sounds'],
      description: 'Italian Opera',
      aliases: ['opera']
    })
    this.fileNames = ['pagliacci.mp3']
  }
}
