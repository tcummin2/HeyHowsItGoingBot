import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Load extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'load',
      fullCategory: ['sounds'],
      description: 'Share the load...',
      aliases: ['share']
    })
    this.fileNames = ['load.mp3']
  }
}
