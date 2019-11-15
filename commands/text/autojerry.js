const BaseTextCommand = require('../../base_text_command')

class AutoJerry extends BaseTextCommand {
  constructor(client) {
    super(client, {
      name: 'autojerry',
      group: 'text',
      memberName: 'autojerry',
      description: 'Plays the seinfeld theme when somebody joins'
    })
  }

  async run(message, args) {
    var { member, guild } = message
    if (!servers[guild.id]) servers[guild.id] = {}
    if (args === 'stop') {
      Object.assign(servers[guild.id], { autoJerry: false })
    } else {
      if (member.voiceChannel) {
        Object.assign(servers[guild.id], {
          autoJerry: { voiceChannelId: member.voiceChannel.id }
        })
        message.channel.sendMessage(`Watching ${member.voiceChannel.name} for Jerrys`)
      }
    }
  }
}

module.exports = AutoJerry