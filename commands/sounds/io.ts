import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Io extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'io',
      fullCategory: ['sounds'],
      description: 'Io'
    })
    this.fileNames = ['io.mp3', 'io-2.mp3']
  }
}
