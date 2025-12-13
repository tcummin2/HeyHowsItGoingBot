import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class HarrisonFord extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'harrisonford',
      fullCategory: ['sounds'],
      description: 'Harrison Ford.',
      aliases: ['hf']
    })
    this.fileNames = ['harrison-ford.mp3']
  }
}
