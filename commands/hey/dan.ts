import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class DanHey extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'danhey',
      fullCategory: ['sounds'],
      description: 'Dan'
    })
    this.fileNames = ['hey/dan.mp3']
  }
}
