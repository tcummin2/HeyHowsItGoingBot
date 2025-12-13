import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Hello extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'hello',
      fullCategory: ['sounds'],
      description: 'Hello'
    })
    this.fileNames = ['Hello.mp3']
  }
}
