import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Victory extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'Victory',
      fullCategory: ['sounds'],
      description: 'You did it!',
      aliases: ['win', 'v']
    })
    this.ignoreArguments = true
    this.fileNames = [
      'victory-ffvii.mp3',
      'sonic-act-cleared.mp3'
    ]
  }
}
