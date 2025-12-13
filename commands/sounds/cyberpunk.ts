import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Cyberpunk extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'cyberpunk',
      fullCategory: ['sounds'],
      description: 'Keanu'
    })
    this.fileNames = ['cyberpunk.mp3']
  }
}
