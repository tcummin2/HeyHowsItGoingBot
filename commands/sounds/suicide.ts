import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Suicide extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'suicide',
      fullCategory: ['sounds'],
      description: 'Halo 3 Suicide'
    })
    this.fileNames = ['suicide.mp3']
  }
}
