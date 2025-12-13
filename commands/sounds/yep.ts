import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Yep extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'yep',
      fullCategory: ['sounds'],
      description: '*Record Scratch* *Freeze Frame* Yep, that\'s me'
    })
    this.fileNames = ['yep.mp3']
  }
}
