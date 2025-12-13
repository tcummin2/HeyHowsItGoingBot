import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Dirt extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'dirt',
      fullCategory: ['sounds'],
      description: 'My emptire of dirt'
    })
    this.fileNames = ['dirt.mp3']
  }
}
