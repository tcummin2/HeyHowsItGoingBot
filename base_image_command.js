import { Command } from '@sapphire/framework'
import path from 'path'

export default class BaseImageCommand extends Command {
  async messageRun(message, args) {
    const indexArg = await args.pick('number').catch(() => -1)
    const index = indexArg >= 1
      ? Math.floor(Math.floor((indexArg - 1) % this.fileNames.length))
      : Math.floor(Math.random() * this.fileNames.length)

    const fileName = this.fileNames[index]
    const filePath = path.resolve('img', fileName)

    await message.channel.send({
      content: this.hideText ? '' : this.description,
      files: [{
        attachment: filePath,
        name: fileName
      }]
    })
  }
}
