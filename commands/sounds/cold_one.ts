import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class ColdOne extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'coldone',
      fullCategory: ['sounds'],
      description: 'Das a cold one'
    })
    this.fileNames = ['cold-one.mp3']
  }
}
