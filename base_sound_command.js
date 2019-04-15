const { Command } = require('discord.js-commando')
const fs = require('fs')

class BaseSoundCommand extends Command {
  play(connection, message, args) {
    var fileName = this.fileNames[Math.floor(Math.random() * this.fileNames.length)]
    var filePath = `${__dirname}/sounds/${fileName}`

    var readStream = fs.createReadStream(filePath)

    var server = servers[message.guild.id]
    server.dispatcher = connection.playStream(readStream, {
      volume: !isNaN(args) ? Math.min(args, 100) : 1
    })

    server.dispatcher.on('end', () => { connection.disconnect() })
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