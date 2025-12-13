import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Sir extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'sir',
      fullCategory: ['sounds'],
      description: 'SIRRRRRRRRRRRRRRRRRRRRRR'
    })
    this.fileNames = ['sir.mp3']
  }
}
