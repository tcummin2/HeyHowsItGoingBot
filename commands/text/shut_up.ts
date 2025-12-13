import axios from 'axios'
import type { Command } from '@sapphire/framework'
import type { Message, TextChannel } from 'discord.js'
import BaseTextCommand from '../../base_text_command.ts'

const DEFAULT_TEXT = 'shut up'

let navySealCopyPasta: string

export default class ShutUp extends BaseTextCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'shutup',
      fullCategory: ['text'],
      description: DEFAULT_TEXT
    })
  }

  async messageRun(message: Message) {
    if (!navySealCopyPasta) {
      const { data } = await axios.get('https://raw.githubusercontent.com/Patater/qso-generator/master/corpora/navy-seal-copypasta.txt')
      navySealCopyPasta = data
    }

    const randomNumber = Math.floor(Math.random() * 10)
    const content = randomNumber === 0 ? navySealCopyPasta : DEFAULT_TEXT

    await (message.channel as TextChannel).send(content)
  }
}
