import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Pirates extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'pirates',
      fullCategory: ['sounds'],
      description: 'That\'s got to be the worst pirate I\'ve ever seen.'
    })
    this.fileNames = ['pirates.mp3']
  }
}
