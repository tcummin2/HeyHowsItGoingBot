import { Command } from '@sapphire/framework'
import type { Message } from 'discord.js'

export default class LeaveChannelCommand extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'heyleave',
      fullCategory: ['sounds'],
      description: 'Leaves the channel'
    })
  }

  async messageRun(message: Message) {
    if (message.member?.voice) {
      await message.member.voice.disconnect()
    }
  }
}
