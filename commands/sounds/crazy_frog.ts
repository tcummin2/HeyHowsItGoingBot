import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class CrazyFrog extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'crazyfrog',
      fullCategory: ['sounds'],
      description: 'BRING DING DING DING DING DING'
    })
    this.fileNames = ['crazy-frog.mp3', 'crazy-frog-2.mp3']
  }
}
