import { Command } from '@sapphire/framework'
import insults from 'insults'

// No idea why this is necessary
const { default: getInsult } = insults

export default class GoodBot extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'goodbot',
      category: 'other',
      description: 'Compliment the bot'
    })
  }

  async messageRun({ channel }) {
    await channel.send(getInsult())
  }
}
