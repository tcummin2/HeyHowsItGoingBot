import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Gigachad extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'gigachad',
      fullCategory: ['sounds'],
      description: 'Yes.',
      aliases: ['chad', 'chadd']
    })
    this.fileNames = ['gigachad.mp3']
  }
}
