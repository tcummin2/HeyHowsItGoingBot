import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class XFiles extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'xfiles',
      fullCategory: ['sounds'],
      description: 'Illuminati confirmed'
    })
    this.fileNames = ['x-files.mp3']
  }
}
