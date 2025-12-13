import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class HeyGosh extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'heygosh',
      fullCategory: ['hey'],
      description: 'HHHHHHEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYY'
    })
    this.fileNames = ['hey/gosh.mp3']
  }
}
