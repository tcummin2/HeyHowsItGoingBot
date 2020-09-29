const { Command } = require('discord.js-commando')

class BaseSoundCommand extends Command {
  play(connection, message, args) {
    var index = !this.ignoreArguments && !isNaN(args) && args >= 1
      ? Math.floor(Math.floor((args - 1) % this.fileNames.length))
      : Math.floor(Math.random() * this.fileNames.length)

    var fileName = this.fileNames[index]
    var filePath = `${__dirname}/sounds/${fileName}`

    var server = servers[message.guild.id]
    server.isPlaying = true
    server.dispatcher = connection.playFile(filePath)

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

module.exports = BaseSoundCommand