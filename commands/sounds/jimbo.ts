import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Jimbo extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'jimbo',
      fullCategory: ['sounds'],
      description: 'Wuss poppin Jimbo'
    })
    this.fileNames = ['jimbo.mp3']
  }
}
