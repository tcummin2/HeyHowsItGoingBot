import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Dong extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'dong',
      fullCategory: ['sounds'],
      description: '🍆',
      aliases: ['🍆']
    })
    this.fileNames = ['dong.mp3']
  }
}
