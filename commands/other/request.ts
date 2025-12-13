import type { Args } from '@sapphire/framework'
import { Command } from '@sapphire/framework'
import type { Message } from 'discord.js'
import { ChannelType } from 'discord.js'

export default class Request extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'request',
      fullCategory: ['other'],
      description: 'Request a feature for the bot'
    })
  }

  async messageRun({ member, channel, client }: Message, args: Args) {
    if (!member || channel.type !== ChannelType.GuildText) return

    try {
      const user = await client.users.fetch(process.env.OWNER_ID!)
      const text = await args.rest('string')
      await user.send(`Request from ${member.user.username}: ${text}`)
      await channel.send('Your feature request has been sent to the bot owner.')
    } catch {
      await channel.send('Failed to send your request. Please try again later.')
    }
  }
}
