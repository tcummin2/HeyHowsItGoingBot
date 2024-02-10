import WordPos from 'wordpos'
import BaseTtsCommand from '../../base_tts_command.js'

const wordpos = new WordPos()

export default class Stream extends BaseTtsCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'stream',
      category: 'other',
      description: 'Yo whose <noun> I gotta <verb> to get a stream around here?'
    })
  }

  async messageRun({ channel }) {
    const [noun] = await wordpos.randNoun()
    const [verb] = await wordpos.randVerb()
    const str = `Yo whose ${noun.replace('_', ' ')} I gotta ${verb.replace('_', ' ')} to get a stream around here?`
    await channel.send({ content: str, tts: true })
  }
}
