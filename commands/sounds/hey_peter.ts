import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class HeyPeter extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'heypeter',
      fullCategory: ['sounds'],
      description: 'Hey Peter Francis Geraci'
    })
    this.fileNames = ['hey-peter.mp3']
  }
}
