import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Nfl extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'nfl',
      fullCategory: ['sounds'],
      description: 'Cue the dancing robot'
    })
    this.fileNames = ['nfl.mp3']
  }
}
