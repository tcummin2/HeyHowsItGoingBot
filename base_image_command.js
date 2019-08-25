const { Command } = require('discord.js-commando')

class BaseImageCommand extends Command {
  async run(message, args) {
    var index = !isNaN(args) && args >= 1
      ? Math.floor(Math.floor((args - 1) % this.fileNames.length))
      : Math.floor(Math.random() * this.fileNames.length)

    var fileName = this.fileNames[index]
    var filePath = `${__dirname}/img/${fileName}`

    message.channel.send(this.hideText ? '' : this.description, {
      files: [{
        attachment: filePath,
        name: fileName
      }]
    })
  }
}

module.exports = BaseImageCommand