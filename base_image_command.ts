import path from 'path'
import type { Args } from '@sapphire/framework'
import { Command } from '@sapphire/framework'
import type { Message, TextChannel } from 'discord.js'

export default class BaseImageCommand extends Command {
  fileNames: string[] = []
  hideText: boolean = false

  async messageRun(message: Message, args: Args) {
    const indexArg = await args.pick('number').catch(() => -1)
    const index = indexArg >= 1
      ? Math.floor(Math.floor((indexArg - 1) % this.fileNames.length))
      : Math.floor(Math.random() * this.fileNames.length)

    const fileName = this.fileNames[index]
    if (!fileName) return

    const filePath = path.resolve('img', fileName)

    await (message.channel as TextChannel)?.send({
      content: this.hideText ? '' : this.description,
      files: [{
        attachment: filePath,
        name: fileName
      }]
    })
  }
}
