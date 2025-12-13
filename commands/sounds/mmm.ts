import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Mmm extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'mmm',
      fullCategory: ['sounds'],
      description: 'Mmm whatcha say'
    })
    this.fileNames = ['mmm.mp3']
  }
}
