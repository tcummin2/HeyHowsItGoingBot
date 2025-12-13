import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Silence extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'silence',
      fullCategory: ['sounds'],
      description: 'Hello darkness my old friend',
      aliases: ['darkness', 'hellodarkness', 'soundofsilence']
    })
    this.fileNames = ['silence.mp3']
  }
}
