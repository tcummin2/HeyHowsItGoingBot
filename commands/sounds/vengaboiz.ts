import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Vengaboiz extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'vengaboiz',
      fullCategory: ['sounds'],
      description: 'We like to party'
    })
    this.fileNames = ['vengaboiz.mp3']
  }
}
