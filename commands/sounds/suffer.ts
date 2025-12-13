import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Suffer extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'suffer',
      fullCategory: ['sounds'],
      description: 'Why are we still here? Just to suffer?',
      aliases: ['whyarewestillhere']
    })
    this.fileNames = ['suffer.mp3']
  }
}
