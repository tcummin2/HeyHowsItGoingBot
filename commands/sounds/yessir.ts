import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class YesSir extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'yessir',
      fullCategory: ['sounds'],
      description: 'How was everybody\'s day'
    })
    this.fileNames = ['yessir.mp3']
  }
}
