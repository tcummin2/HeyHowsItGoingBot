import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Wbrb extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'wbrb',
      fullCategory: ['sounds'],
      description: 'We\'ll be right back'
    })
    this.fileNames = ['wbrb.mp3']
  }
}
