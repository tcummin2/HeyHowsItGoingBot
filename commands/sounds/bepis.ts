import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Bepis extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bepis',
      fullCategory: ['sounds'],
      description: 'Gimme the bepis'
    })
    this.fileNames = ['bepis.mp3', 'bepis-2.mp3', 'bepis-3.mp3', 'bepis-4.mp3', 'bepis-5.mp3', 'bepis-6.mp3', 'bepis-7.mp3']
  }
}
