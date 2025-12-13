import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Dolphin extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'dolphin',
      fullCategory: ['sounds'],
      description: '*Dolphin noise*',
      aliases: ['🐬']
    })
    this.fileNames = ['dolphin.mp3', 'dolphin-2.mp3']
  }
}
