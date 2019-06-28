const { Command } = require('discord.js-commando')

class Video extends Command {
  constructor(client) {
    super(client, {
      name: 'video',
      group: 'other',
      memberName: 'video',
      description: 'Screen sharing / video chat'
    })
  }

  async run({ member, guild, channel }, args) {
    var url = member.voiceChannel
      ? `https://www.discordapp.com/channels/${guild.id}/${member.voiceChannel.id}`
      : 'You must be in a voice channel to share video'

    channel.send(url)
  }
}

module.exports = Video