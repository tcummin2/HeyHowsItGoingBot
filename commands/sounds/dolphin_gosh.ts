import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class DolphinGosh extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'dolphingosh',
      fullCategory: ['sounds'],
      description: '*Dolphin noise from the heavens*',
      aliases: ['🐬gosh']
    })
    this.fileNames = ['dolphin-gosh.mp3']
  }
}
