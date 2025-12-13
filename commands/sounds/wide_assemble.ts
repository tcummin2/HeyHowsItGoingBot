import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class WideAssemble extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'wideassemble',
      fullCategory: ['sounds'],
      description: 'You know.'
    })
    this.fileNames = ['wide-assemble.mp3']
  }
}
