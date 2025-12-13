import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Enya extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'enya',
      fullCategory: ['sounds'],
      description: 'Who can say where the road goes?'
    })
    this.fileNames = ['enya.mp3', 'enya-2.mp3']
  }
}
