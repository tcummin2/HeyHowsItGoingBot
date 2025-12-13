import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Wield extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'wield',
      fullCategory: ['sounds'],
      description: 'You cannot wield it. None of us can.'
    })
    this.fileNames = ['wield.mp3']
  }
}
