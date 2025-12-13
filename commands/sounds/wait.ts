import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Wait extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'wait',
      fullCategory: ['sounds'],
      description: 'No no no no no no no wait wait wait wait wait',
      aliases: ['nono', 'nonono', 'punisher']
    })
    this.fileNames = ['wait.mp3']
  }
}
