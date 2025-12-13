import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class DarkSouls extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'darksouls',
      fullCategory: ['sounds'],
      description: 'Thank you Dark Souls.'
    })
    this.fileNames = ['dark-souls.mp3', 'dark-souls-2.mp3']
  }
}
