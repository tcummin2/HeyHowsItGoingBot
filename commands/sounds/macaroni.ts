import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Macaroni extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'macaroni',
      fullCategory: ['sounds'],
      description: 'Macaroni, with the chicken strips',
      aliases: ['chickenstrips', 'uh']
    })
    this.fileNames = ['macaroni.mp3', 'macaroni-2.mp3']
  }
}
