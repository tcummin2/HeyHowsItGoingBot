import { Command } from '@sapphire/framework'

export default class BaseTextCommand extends Command {
  // constructor(context, options) {
  //   super(context, options)
  // }

  async messageRun(message) {
    await message.channel.send(this.description)
  }
}
