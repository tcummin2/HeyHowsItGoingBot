import { type Args, Command } from '@sapphire/framework'
import { ChannelType, type Message } from 'discord.js'
import type BaseSoundCommand from '../../base_sound_command.ts'
import type { AutoCommand } from '../../types/autoCommand.ts'
import autoCommandManager from '../../auto_command_manager.ts'
import type Stop from '../text/stop.ts'

export default class Auto extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'auto',
      fullCategory: ['other'],
      description: 'Set an auto-join sound command in server'
    })
  }

  async messageRun(message: Message, args: Args) {
    const {
      member,
      guild,
      channel
    } = message
    if (!guild || !member || channel.type !== ChannelType.GuildText) return

    const commandName = await args.pick('string')
    const commandArgs = await args.pick('string').catch(() => '')

    const voiceChannel = member.voice.channel

    if (!voiceChannel) {
      await channel.send('You must be in a voice channel to set an auto-join command.')
      return
    }

    if (commandName === 'stop') {
      const stopCommand = this.store.get('autostop')
      await (stopCommand as Stop)?.messageRun(message)
      return
    }

    const command = this.store.get(commandName) as BaseSoundCommand
    if (!command) {
      await channel.send(`Command \`${commandName}\` is not a valid command.`)
      return
    }

    if (!command.isAutomatable) {
      await channel.send(`Command \`${commandName}\` cannot be used as an auto-join command.`)
      return
    }

    const autoCommandInfo: AutoCommand = {
      command,
      commandArgs,
      message,
      args,
      voiceChannelId: voiceChannel.id
    }
    autoCommandManager.setAutoCommandForGuild(guild.id, autoCommandInfo)

    const commandText = [`!${commandName}`, ...commandArgs.split(/\s+/)].join(' ')
    await channel.send(`Auto-join command set for <#${voiceChannel.id}>: \`${commandText}\``)
  }
}
