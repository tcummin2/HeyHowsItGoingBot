import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class SleepYeah extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'sleepyeah',
      fullCategory: ['sounds'],
      description: 'GIVE US ANOTHER ONE'
    })
    this.fileNames = ['sleep-yeah.mp3']
  }
}
