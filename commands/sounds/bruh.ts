import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Bruh extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bruh',
      fullCategory: ['sounds'],
      description: 'bruh'
    })
    this.fileNames = ['bruh.mp3']
  }
}
