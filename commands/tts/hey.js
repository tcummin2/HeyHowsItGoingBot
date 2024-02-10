import BaseTtsCommand from '../../base_tts_command.js'

export default class HeyTts extends BaseTtsCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'heytts',
      category: 'tts',
      description: 'Hey how\'s it going'
    })
  }
}
