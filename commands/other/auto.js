import { Command } from '@sapphire/framework'
import { onVoiceUpdate } from '../../utils.js'

export default class Auto extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'auto',
      category: 'other',
      description: 'Set an auto-join sound command in server'
    })
  }

  async messageRun(message, args) {
    const {
      member,
      guild,
      channel,
      client
    } = message

    const commandName = await args.pick('string')
    const commandArgs = await args.pick('string').catch(() => '')

    if (!global.servers[guild.id]) global.servers[guild.id] = {}
    const serverInfo = global.servers[guild.id]
    const voiceChannel = member.voice.channel

    const command = this.store.get(commandName)
    if (voiceChannel && command?.isAutomatable) {
      Object.assign(serverInfo, {
        autoCommand: {
          command,
          commandArgs,
          message,
          args,
          voiceChannelId: voiceChannel.id
        }
      })

      client.on('voiceStateUpdate', onVoiceUpdate)

      const commandText = [`!${commandName}`, ...commandArgs.split(/\s+/)].join(' ')
      await channel.send(`Auto-join command set for <#${voiceChannel.id}>: \`${commandText}\``)
    }
  }
}
