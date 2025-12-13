import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Conk extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'conk',
      fullCategory: ['sounds'],
      description: 'We\'re all out of bepis'
    })
    this.fileNames = ['conk.mp3']
  }
}
