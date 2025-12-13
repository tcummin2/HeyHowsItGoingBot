import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Michael extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'michael',
      fullCategory: ['sounds'],
      description: 'MICHAEL'
    })
    this.fileNames = [
      'michael.mp3',
      'michael-2.mp3',
      'michael-3.mp3',
      'michael-4.mp3',
      'michael-5.mp3',
      'michael-all.mp3',
      'michael-loud.mp3'
    ]
  }
}
