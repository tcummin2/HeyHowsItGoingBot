import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Fell extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'fell',
      fullCategory: ['sounds'],
      description: 'he fell'
    })
    this.fileNames = ['fell.mp3']
  }
}
