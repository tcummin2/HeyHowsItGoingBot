import type { VoiceState } from 'discord.js'
import type { AutoCommand } from './types/autoCommand.ts'
import serverManager from './server_manager.ts'

class AutoCommandManager {
  autoCommands: Map<string, AutoCommand> = new Map()

  getAutoCommandForGuild(guildId: string): AutoCommand | undefined {
    return this.autoCommands.get(guildId)
  }

  setAutoCommandForGuild(guildId: string, autoCommand: AutoCommand): void {
    this.autoCommands.set(guildId, autoCommand)
  }

  removeAutoCommandForGuild(guildId: string): void {
    this.autoCommands.delete(guildId)
  }

  async onVoiceUpdate(oldVoiceState: VoiceState, newVoiceState: VoiceState) {
    const oldUserChannel = oldVoiceState.channel
    const newUserChannel = newVoiceState.channel

    if (!!oldUserChannel || !newUserChannel) return

    const autoCommand = this.getAutoCommandForGuild(newUserChannel.guild.id)

    if (
      !newVoiceState.member?.user.bot
      && !serverManager.isServerPlaying(newUserChannel.guild.id)
      && autoCommand
      && autoCommand?.voiceChannelId === newUserChannel.id
    ) {
      autoCommand.args.start()
      // because the 1st argument is the command name, disregard it
      await autoCommand.args.pick('string').catch(() => '')

      await autoCommand.command.messageRun(autoCommand.message, autoCommand.args)
    }
  }
}

export default new AutoCommandManager()
