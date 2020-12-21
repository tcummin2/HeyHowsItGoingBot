const BaseTextCommand = require('../../base_text_command')

class AutoPunk extends BaseTextCommand {
  constructor(client) {
    super(client, {
      name: 'autopunk',
      group: 'text',
      memberName: 'autopunk',
      description: 'In 2077, you can be',
      aliases: ['autocyber', 'autocyberpunk']
    })
  }

  async run(message, args) {
    var { member, guild } = message
    if (!servers[guild.id]) servers[guild.id] = {}
    if (args === 'stop') {
      Object.assign(servers[guild.id], { autoPunk: false })
    } else {
      if (member.voiceChannel) {
        Object.assign(servers[guild.id], {
          autoPunk: { voiceChannelId: member.voiceChannel.id }
        })
        message.channel.send(`Watching ${member.voiceChannel.name} for joins`)
      }
    }
  }
}

module.exports = AutoPunk