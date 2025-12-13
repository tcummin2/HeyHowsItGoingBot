import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class CrabRave extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'crabrave',
      fullCategory: ['sounds'],
      description: '🦀 BABY YODA IS GONE 🦀',
      aliases: ['crab', '🦀']
    })
    this.fileNames = ['crab-rave.mp3']
  }
}
