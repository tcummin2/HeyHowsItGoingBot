import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Teeph extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'teeph',
      fullCategory: ['sounds'],
      description: 'Ey yo Teeph'
    })
    this.fileNames = ['teeph.mp3', 'teeph-2.mp3']
  }
}
