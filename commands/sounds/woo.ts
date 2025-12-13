import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Woo extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'woo',
      fullCategory: ['sounds'],
      description: 'WOO YEAH BAYBEEEE',
      aliases: ['charlie', 'cr1tikal']
    })
    this.fileNames = ['woo.mp3', 'woo-2.mp3']
  }
}
