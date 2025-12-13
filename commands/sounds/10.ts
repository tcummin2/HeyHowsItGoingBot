import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Ten extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: '10',
      fullCategory: ['sounds'],
      description: 'That\'s a ten',
      aliases: ['ten']
    })
    this.fileNames = ['10.mp3']
  }
}
