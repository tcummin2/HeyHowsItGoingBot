import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Today extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'today',
      fullCategory: ['sounds'],
      description: 'Today'
    })
    this.fileNames = ['today.mp3']
  }
}
