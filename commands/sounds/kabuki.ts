import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Kabuki extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'kabuki',
      fullCategory: ['sounds'],
      description: 'YOOOOOOOOOOOOOOOOOOOO',
      aliases: ['not']
    })
    this.fileNames = ['kabuki.mp3', 'kabuki-2.mp3']
  }
}
