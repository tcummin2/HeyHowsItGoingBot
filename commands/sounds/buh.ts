import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Buh extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'buh',
      fullCategory: ['sounds'],
      description: 'buh'
    })
    this.fileNames = ['buh.mp3', 'buh-loud.mp3', 'buh-far.mp3']
  }
}
