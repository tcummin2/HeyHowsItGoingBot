import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Sigma extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'sigma',
      fullCategory: ['sounds'],
      description: 'Get on that grindset'
    })
    this.fileNames = ['sigma.mp3']
  }
}
