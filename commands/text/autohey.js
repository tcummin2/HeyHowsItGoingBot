const BaseTextCommand = require('../../base_text_command')

class AutoHey extends BaseTextCommand {
  constructor(client) {
    super(client, {
      name: 'autohey',
      group: 'text',
      memberName: 'autohey',
      description: 'Asks hey how\'s it going when somebody joins'
    })
  }

  async run(message, args) {
    var { member, guild } = message
    if (!servers[guild.id]) servers[guild.id] = {}
    if (args === 'stop') {
      Object.assign(servers[guild.id], { autoHey: false })
    } else {
      if (member.voiceChannel) {
        Object.assign(servers[guild.id], {
          autoHey: { voiceChannelId: member.voiceChannel.id }
        })
        message.channel.send(`Watching ${member.voiceChannel.name} for joins`)
      }
    }
  }
}

module.exports = AutoHey