import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class FarHey extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'farhey',
      fullCategory: ['hey'],
      description: '............hey'
    })
    this.fileNames = ['hey/far.mp3']
  }
}
