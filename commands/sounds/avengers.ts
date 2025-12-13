import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Avengers extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'avengers',
      fullCategory: ['sounds'],
      description: 'Bummmmmm, bum bum BUM BUMMMMMMMMMM BUMMM BUMMM BUMMMMMM'
    })
    this.fileNames = ['avengers.mp3']
  }
}
