import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Untitled extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'untitled',
      fullCategory: ['sounds'],
      description: 'How could this happen to me?',
      aliases: ['howcouldthishappentome']
    })
    this.fileNames = ['untitled.mp3']
  }
}
