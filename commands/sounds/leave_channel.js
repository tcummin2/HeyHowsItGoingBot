import { Command } from '@sapphire/framework'

export default class LeaveChannelCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'heyleave',
      category: 'sounds',
      description: 'Leaves the channel'
    })
  }

  async messageRun(message) {
    if (message.guild.voiceConnection) {
      await message.guild.voiceConnection.disconnect()
    }
  }
}
