import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Wide extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'wide',
      fullCategory: ['sounds'],
      description: 'ｗｉｄｅ',
      aliases: ['putin']
    })
    this.fileNames = ['wide.mp3']
  }
}
