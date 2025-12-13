import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Fine extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'fine',
      fullCategory: ['sounds'],
      description: 'You just have to say you\'re fine'
    })
    this.fileNames = ['fine.mp3']
  }
}
