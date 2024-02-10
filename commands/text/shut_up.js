import axios from 'axios'
import BaseTextCommand from '../../base_text_command.js'

const DEFAULT_TEXT = 'shut up'

let navySealCopyPasta

export default class ShutUp extends BaseTextCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'shutup',
      description: DEFAULT_TEXT
    })
  }

  async messageRun(message) {
    if (!navySealCopyPasta) {
      const { data } = await axios.get('https://raw.githubusercontent.com/Patater/qso-generator/master/corpora/navy-seal-copypasta.txt')
      navySealCopyPasta = data
    }

    const randomNumber = Math.floor(Math.random() * 10)
    const content = randomNumber === 0 ? navySealCopyPasta : DEFAULT_TEXT

    await message.channel.send(content)
  }
}
