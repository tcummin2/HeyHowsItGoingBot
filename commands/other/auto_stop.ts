import { Command } from '@sapphire/framework'
import type { Message } from 'discord.js'
import { ChannelType } from 'discord.js'
import autoCommandManager from '../../auto_command_manager.ts'

export default class AutoStop extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'autostop',
      fullCategory: ['other'],
      description: 'Stop any auto-commands in server'
    })
  }

  async messageRun({ guild, channel }: Message) {
    if (!guild || channel.type !== ChannelType.GuildText) return

    const autoCommand = autoCommandManager.getAutoCommandForGuild(guild.id)

    if (!autoCommand) {
      await channel.send('No auto-join command is set for this server.')
      return
    }

    const channelId = autoCommand.voiceChannelId
    autoCommandManager.removeAutoCommandForGuild(guild.id)
    await channel.send(`Stopped watching <#${channelId}> for auto-joins.`)
  }
}
