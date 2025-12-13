import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class B extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'b',
      fullCategory: ['sounds'],
      description: '🅱️',
      aliases: ['🅱️']
    })
    this.fileNames = ['b.mp3']
  }
}
