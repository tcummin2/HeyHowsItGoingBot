import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Damage extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'damage',
      fullCategory: ['sounds'],
      description: 'NOW THAT\'S A LOT OF DAMAGE'
    })
    this.fileNames = ['damage.mp3', 'damage-2.mp3']
  }
}
