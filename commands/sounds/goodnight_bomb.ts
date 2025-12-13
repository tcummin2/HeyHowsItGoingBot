import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class GoodnightBomb extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'goodnightbomb',
      fullCategory: ['sounds'],
      description: 'Goodnight girl, I\'ll see ya tomorrow'
    })
    this.fileNames = ['goodnight_bomb.mp3']
  }
}
