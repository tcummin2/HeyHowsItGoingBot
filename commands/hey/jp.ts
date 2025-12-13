import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class JpHey extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'jphey',
      fullCategory: ['hey'],
      description: 'JP'
    })
    this.fileNames = ['hey/jp.mp3', 'hey/jp-2.mp3']
  }
}
