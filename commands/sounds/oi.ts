import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Oi extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'oi',
      fullCategory: ['sounds'],
      description: 'oi'
    })
    this.fileNames = ['oi.mp3', 'oi-2.mp3']
  }
}
