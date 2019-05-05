const BaseTextCommand = require('../../base_text_command')

class Git extends BaseTextCommand {
  constructor(client) {
    super(client, {
      name: 'git',
      group: 'text',
      memberName: 'git',
      description: 'git gud baddie https://github.com/tcummin2/HeyHowsItGoingBot'
    })
  }
}

module.exports = Git