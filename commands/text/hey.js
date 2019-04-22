const BaseTextCommand = require('../../base_text_command')

class HeyText extends BaseTextCommand {
  constructor(client) {
    super(client, {
      name: 'heytext',
      group: 'text',
      memberName: 'heytext',
      description: 'Hey how\'s it going'
    })
  }
}

module.exports = HeyText