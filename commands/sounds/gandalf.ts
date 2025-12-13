import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Gandalf extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'gandalf',
      fullCategory: ['sounds'],
      description: 'Fly you fools'
    })
    this.fileNames = ['gandalf.mp3', 'gandalf-2.mp3']
  }
}
