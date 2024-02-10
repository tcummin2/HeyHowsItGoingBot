import { Command } from '@sapphire/framework'

export default class BaseTtsCommand extends Command {
  async messageRun(message) {
    await message.channel.send({
      content: this.description,
      tts: true
    })
  }
}
