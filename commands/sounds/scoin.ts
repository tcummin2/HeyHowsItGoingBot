import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Scoin extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'scoin',
      fullCategory: ['sounds'],
      description: '\'scoin on, boys?',
      aliases: ['scoin', 'sgoin']
    })
    this.fileNames = ['scoin.mp3']
  }
}
