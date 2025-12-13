import type { Command } from '@sapphire/framework'
import BaseTextCommand from '../../base_text_command.ts'

export default class HeyText extends BaseTextCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'heytext',
      fullCategory: ['text'],
      description: 'Hey how\'s it going'
    })
  }
}
