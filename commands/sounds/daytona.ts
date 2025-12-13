import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Daytona extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'daytona',
      fullCategory: ['sounds'],
      description: 'DAYTONAAAAAAAA'
    })
    this.fileNames = ['daytona.mp3', 'daytona-2.mp3']
  }
}
