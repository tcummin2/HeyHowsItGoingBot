import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class WakeTeephUp extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'waketeephup',
      fullCategory: ['sounds'],
      description: 'EY YO TEEPH'
    })
    this.fileNames = ['teeph-loud.mp3', 'teeph-loud-2.mp3']
  }
}
