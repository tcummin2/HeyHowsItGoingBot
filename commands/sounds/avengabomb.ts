import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Avengabomb extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'avengabomb',
      fullCategory: ['sounds'],
      description: 'Mom come pick me up I\'m scared'
    })
    this.fileNames = ['avengabomb.mp3']
  }
}
