import { Command } from '@sapphire/framework'

export default class BaseTextCommand extends Command {
  async messageRun(message) {
    await message.channel.send(this.description)
  }
}
