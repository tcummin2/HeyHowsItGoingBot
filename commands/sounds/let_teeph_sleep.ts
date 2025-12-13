import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class LetTeephSleep extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'letteephsleep',
      fullCategory: ['sounds'],
      description: 'Shhh baby sleeping'
    })
    this.fileNames = ['let-teeph-sleep.mp3']
  }
}
