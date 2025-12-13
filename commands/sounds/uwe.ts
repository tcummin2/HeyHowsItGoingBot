import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Uwe extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'uwe',
      fullCategory: ['sounds'],
      description: 'uuuuwwwweeee'
    })
    this.fileNames = ['uwe.mp3']
  }
}
