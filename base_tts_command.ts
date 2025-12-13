import { Command } from '@sapphire/framework'
import type { Message, TextChannel } from 'discord.js'

export default class BaseTtsCommand extends Command {
  async messageRun(message: Message) {
    await (message.channel as TextChannel)?.send({
      content: this.description,
      tts: true
    })
  }
}
