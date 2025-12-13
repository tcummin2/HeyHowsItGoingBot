import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class DoubleKill extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'doublekill',
      fullCategory: ['sounds'],
      description: 'Double Kill'
    })
    this.fileNames = ['double-kill.mp3']
  }
}
