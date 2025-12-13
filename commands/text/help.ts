import { Command } from '@sapphire/framework'
import type { Message } from 'discord.js'
import { ChannelType } from 'discord.js'

let helpContent: string[]

export default class Help extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'help',
      description: 'Sends a message to the user of all possible commands'
    })
  }

  updateHelpContent() {
    const display = this.store.map(command => `\`!${command.name}\` - ${command.description}\n`)

    helpContent = display.reduce((arr: string[], current: string) => {
      const str = (arr.at(-1) ?? '') + current

      if (!arr.length || str.length > 2000) {
        arr.push(current)
      } else {
        arr[arr.length - 1] = str
      }
      return arr
    }, [])
  }

  async messageRun({ member, channel }: Message) {
    if (!member || channel.type !== ChannelType.GuildText) return

    if (!helpContent) {
      this.updateHelpContent()
    }

    await Promise.all(helpContent.map(async dm => {
      await member.user.send(dm)
    }))

    await channel.send(`<@${member.id}>, sent you a DM with information.`)
  }
}
