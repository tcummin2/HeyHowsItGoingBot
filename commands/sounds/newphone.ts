import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class NewPhone extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'newphone',
      fullCategory: ['sounds'],
      description: 'New phone who dis'
    })
    this.fileNames = ['newphone.mp3']
  }
}
