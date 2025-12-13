import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class IHurt extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'ihurt',
      fullCategory: ['sounds'],
      description: 'I hurt'
    })
    this.fileNames = ['i-hurt.mp3']
  }
}
