import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Hurt extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'hurt',
      fullCategory: ['sounds'],
      description: 'I hurt myself today'
    })
    this.fileNames = ['hurt.mp3']
  }
}
