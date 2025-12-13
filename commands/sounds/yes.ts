import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Yes extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'yes',
      fullCategory: ['sounds'],
      description: 'yes'
    })
    this.fileNames = ['yes.mp3']
  }
}
