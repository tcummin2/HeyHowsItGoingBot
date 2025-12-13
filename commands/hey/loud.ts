import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class LoudHey extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'loudhey',
      fullCategory: ['hey'],
      description: 'JP'
    })
    this.fileNames = ['hey/loud.mp3', 'hey/loud-2.mp3']
  }
}
