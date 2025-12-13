import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Oof extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'oof',
      fullCategory: ['sounds'],
      description: 'Big oof'
    })
    this.fileNames = ['oof.mp3', 'oof-2.mp3']
  }
}
