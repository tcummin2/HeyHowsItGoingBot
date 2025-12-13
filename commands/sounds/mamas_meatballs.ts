import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class MamasMeatballs extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'meatballs',
      fullCategory: ['sounds'],
      description: 'Nothin\' beats mama\'s meatballs'
    })
    this.fileNames = ['mamas-meatballs.mp3', 'mamas-meatballs-2.mp3', 'nothin-better.mp3']
  }
}
