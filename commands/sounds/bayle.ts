import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Bayle extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bayle',
      fullCategory: ['sounds'],
      description: 'CURSE YOU BAYLE',
      aliases: ['curseyoubayle']
    })
    this.fileNames = ['bayle.mp3']
  }
}
