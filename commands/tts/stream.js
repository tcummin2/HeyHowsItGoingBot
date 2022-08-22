const BaseTtsCommand = require('../../base_tts_command')
const WordPos = require('wordpos')

const wordpos = new WordPos()

class Stream extends BaseTtsCommand {
  constructor(client) {
    super(client, {
      name: 'stream',
      group: 'other',
      memberName: 'stream',
      description: 'Compliment the bot'
    })
  }

  async run({ channel }) {
    const [noun] = await wordpos.randNoun()
    const [verb] = await wordpos.randVerb()
    const str = `Yo whose ${noun.replace('_', ' ')} I gotta ${verb.replace('_', ' ')} to get a stream around here?`
    channel.send(str, { tts: true })
  }
}

module.exports = Stream