import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class SadAirhorn extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'sadairhorn',
      fullCategory: ['sounds'],
      description: 'Sad airhorn'
    })
    this.fileNames = ['sad-airhorn.mp3']
  }
}
