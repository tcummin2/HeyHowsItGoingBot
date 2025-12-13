import { Command } from '@sapphire/framework'
import type { Message, TextChannel } from 'discord.js'
// @ts-expect-error insults has no types
import insults from 'insults'

// No idea why this is necessary
const { default: getInsult } = insults

export default class GoodBot extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'goodbot',
      fullCategory: ['other'],
      description: 'Compliment the bot'
    })
  }

  async messageRun({ channel }: Message) {
    await (channel as TextChannel)?.send(getInsult())
  }
}
