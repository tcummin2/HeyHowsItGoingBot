const BaseTextCommand = require('../../base_text_command')

class AutoWide extends BaseTextCommand {
  constructor(client) {
    super(client, {
      name: 'autowide',
      group: 'text',
      memberName: 'autowide',
      description: 'Plays the ＷＩＤＥ ＰＵＴＩＮ theme when someone joins',
      aliases: ['autoputin']
    })
  }

  async run(message, args) {
    var { member, guild } = message
    if (!servers[guild.id]) servers[guild.id] = {}
    if (args === 'stop') {
      Object.assign(servers[guild.id], { autoWide: false })
    } else {
      if (member.voiceChannel) {
        Object.assign(servers[guild.id], {
          autoWide: { voiceChannelId: member.voiceChannel.id }
        })
        message.channel.send(`Watching ${member.voiceChannel.name} for **ＰＵＴＩＮ**`)
      }
    }
  }
}

module.exports = AutoWide