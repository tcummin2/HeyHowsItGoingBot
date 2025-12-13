import type { Command } from '@sapphire/framework'
import BaseTextCommand from '../../base_text_command.ts'

const GITHUB_URL = 'https://github.com/tcummin2/HeyHowsItGoingBot'

export default class Git extends BaseTextCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'git',
      fullCategory: ['text'],
      description: `git gud baddie ${GITHUB_URL}`
    })
  }
}
