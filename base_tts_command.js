const { Command } = require('discord.js-commando')

class BaseTtsCommand extends Command {
  async run(message, args) {
    message.channel.send(this.description, { tts: true })
  }
}

module.exports = BaseTtsCommand