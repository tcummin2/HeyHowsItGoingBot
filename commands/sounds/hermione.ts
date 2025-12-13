import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Hermione extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'hermione',
      fullCategory: ['sounds'],
      description: 'Not me, not Hermione, YOU.',
      aliases: ['notme', 'nothermione']
    })
    this.fileNames = ['hermione.mp3']
  }
}
