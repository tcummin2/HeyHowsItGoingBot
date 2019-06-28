const { Command } = require('discord.js-commando')

class BaseTextCommand extends Command {
  async run(message, args) {
    message.channel.send(this.description)
  }
}

module.exports = BaseTextCommand