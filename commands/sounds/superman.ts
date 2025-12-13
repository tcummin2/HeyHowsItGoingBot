import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Superman extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'superman',
      fullCategory: ['sounds'],
      description: 'So here I am...',
      aliases: ['tonyhawk']
    })
    this.fileNames = ['superman.mp3']
  }
}
