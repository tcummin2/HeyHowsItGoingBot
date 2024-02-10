import { Command } from '@sapphire/framework'

let helpContent

export default class Help extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'help',
      description: 'Sends a message to the user of all possible commands'
    })
  }

  async messageRun({ member, channel }) {
    if (!helpContent) {
      const display = this.store.map(command => `\`!${command.name}\` - ${command.description}\n`)

      helpContent = display.reduce((arr, current) => {
        const str = (arr.at(-1) ?? '') + current

        if (!arr.length || str.length > 2000) {
          arr.push(current)
        } else {
          arr[arr.length - 1] = str
        }
        return arr
      }, [])
    }

    await Promise.all(helpContent.map(async dm => {
      await member.user.send(dm)
    }))

    await channel.send(`<@${member.id}>, sent you a DM with information.`)
  }
}
