import { Command } from '@sapphire/framework'
import type { Message, TextChannel } from 'discord.js'

export default class BaseTextCommand extends Command {
  async messageRun(message: Message) {
    await (message.channel as TextChannel)?.send(this.description)
  }
}
