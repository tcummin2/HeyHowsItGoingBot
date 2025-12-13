import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Toss extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'toss',
      fullCategory: ['sounds'],
      description: 'I CANNOT JUMP THE DISTANCE YOU\'LL HAVE TO TOSS ME',
      aliases: ['tossme']
    })
    this.fileNames = ['toss.mp3']
  }
}
