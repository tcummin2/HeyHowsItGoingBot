const { Command } = require('discord.js-commando')
const Ytdl = require('ytdl-core')

class BaseYoutubeCommand extends Command {
  play(connection, message, args) {

    var server = servers[message.guild.id]
    var stream = Ytdl(this.url, { filter: 'audioonly' })
    server.isPlaying = true
    server.dispatcher = connection.playStream(stream, { volume: this.volume || 1 })

    server.dispatcher.on('end', () => {
      server.isPlaying = false
      setTimeout(() => connection.disconnect(), 1000)
    })
  }

  async run(message, args) {
    var { member, guild } = message
    if (member.voiceChannel && !guild.voiceConnection) {
      if (!servers[guild.id]) servers[guild.id] = {}

      member.voiceChannel.join()
        .then(connection => {
          this.play(connection, message, args)
        })
    }
  }
}

module.exports = BaseYoutubeCommand