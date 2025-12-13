import type { Message } from 'discord.js'
import type { Args } from '@sapphire/framework'
import type BaseSoundCommand from '../base_sound_command.ts'

export type AutoCommand = {
  command: BaseSoundCommand
  commandArgs: string
  message: Message
  args: Args
  voiceChannelId: string
}
