import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class BigIron extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bigiron',
      fullCategory: ['sounds'],
      description: 'BIGIRONONHISHIP'
    })
    this.fileNames = ['big-iron.mp3']
  }
}
