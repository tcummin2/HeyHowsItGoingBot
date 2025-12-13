// @ts-expect-error wordpos has no types
import WordPos from 'wordpos'
import type { Message, TextChannel } from 'discord.js'
import type { Command } from '@sapphire/framework'
import BaseTtsCommand from '../../base_tts_command.ts'

const wordpos = new WordPos()

export default class Stream extends BaseTtsCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'stream',
      fullCategory: ['other'],
      description: 'Yo whose <noun> I gotta <verb> to get a stream around here?'
    })
  }

  async messageRun({ channel }: Message) {
    const [noun] = await wordpos.randNoun()
    const [verb] = await wordpos.randVerb()
    const str = `Yo whose ${noun.replace('_', ' ')} I gotta ${verb.replace('_', ' ')} to get a stream around here?`
    await (channel as TextChannel).send({ content: str, tts: true })
  }
}
