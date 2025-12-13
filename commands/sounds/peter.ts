import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Peter extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'peter',
      fullCategory: ['sounds'],
      description: 'Attorney Peter Francis Geraci',
      aliases: ['geraci']
    })
    this.fileNames = ['peter.mp3']
  }
}
