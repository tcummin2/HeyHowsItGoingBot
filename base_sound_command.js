const { Command } = require('discord.js-commando')

class BaseSoundCommand extends Command {
  constructor(client, args) {
    super(client, args)
    this.isAutomatable = true
  }

  play(connection, message, args) {
    const index = !this.ignoreArguments && !isNaN(args) && args >= 1
      ? Math.floor(Math.floor((args - 1) % this.fileNames.length))
      : Math.floor(Math.random() * this.fileNames.length)

    const fileName = this.fileNames[index]
    const filePath = `${__dirname}/sounds/${fileName}`

    let server = servers[message.guild.id]
    server.isPlaying = true
    server.dispatcher = connection.play(filePath)

    server.dispatcher.on('finish', () => {
      server.isPlaying = false
      setTimeout(() => connection.disconnect(), 1000)
    })
  }

  async run(message, args) {
    const { member, guild } = message
    if (member.voice.channel && !guild.voiceConnection) {
      if (!servers[guild.id]) servers[guild.id] = {}

      const connection = await member.voice.channel.join()
      this.play(connection, message, args)
    }
  }
}

module.exports = BaseSoundCommand