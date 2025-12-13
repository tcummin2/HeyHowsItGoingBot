import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Yeh extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'yeh',
      fullCategory: ['sounds'],
      description: 'gniog ti s\'woh yeH'
    })
    this.fileNames = ['yeh.mp3']
  }
}
