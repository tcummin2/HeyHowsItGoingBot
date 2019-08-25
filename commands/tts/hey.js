const BaseTtsCommand = require('../../base_tts_command')

class HeyTts extends BaseTtsCommand {
  constructor(client) {
    super(client, {
      name: 'heytts',
      group: 'tts',
      memberName: 'heytts',
      description: 'Hey how\'s it going'
    })
  }
}

module.exports = HeyTts