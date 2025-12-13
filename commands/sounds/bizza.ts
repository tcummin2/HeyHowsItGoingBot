import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Bizza extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bizza',
      fullCategory: ['sounds'],
      description: 'Bizza',
      aliases: ['🅱️izza']
    })
    this.fileNames = ['bizza.mp3']
  }
}
