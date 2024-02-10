import { Command } from '@sapphire/framework'
import config from '../../config.json' with { type: 'json' }

export default class Request extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'request',
      category: 'other',
      description: 'Request a feature for the bot'
    })
  }

  async messageRun({ member, channel, client }, args) {
    const user = await client.users.fetch(config.ownerId)
    const text = await args.rest('string')
    await Promise.all([
      user.send(`Request from ${member.user.username}: ${text}`),
      channel.send('Your feature request has been sent to the bot owner.')
    ])
  }
}
