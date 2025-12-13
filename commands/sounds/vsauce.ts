import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class VSauce extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'vsauce',
      fullCategory: ['sounds'],
      description: 'Hey, VSauce! Michael Here'
    })
    this.fileNames = ['vsauce.mp3']
  }
}
