import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class UWotM8 extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'uwotm8',
      fullCategory: ['sounds'],
      description: 'U wot, m8?',
      aliases: ['wot', 'uwot', 'm8']
    })
    this.fileNames = ['u-wot-m8.mp3', 'u-wot-m8-2.mp3', 'u-wot-m8-3.mp3']
  }
}
