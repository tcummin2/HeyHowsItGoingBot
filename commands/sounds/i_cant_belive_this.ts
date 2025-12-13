import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class ICantBelieveThis extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'icantbelievethis',
      fullCategory: ['sounds'],
      description: 'I can\'t believe this',
      aliases: ['icantbelieve', 'cantbelieve', 'believe']
    })
    this.fileNames = ['i-cant-believe-this.mp3']
  }
}
