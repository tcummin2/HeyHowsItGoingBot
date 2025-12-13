import type { Command } from '@sapphire/framework'
import BaseTtsCommand from '../../base_tts_command.ts'

export default class HeyTts extends BaseTtsCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'heytts',
      fullCategory: ['tts'],
      description: 'Hey how\'s it going'
    })
  }
}
