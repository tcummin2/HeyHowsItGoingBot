// eslint-disable-next-line import/prefer-default-export
export async function onVoiceUpdate(oldVoiceState, newVoiceState) {
  const oldUserChannel = oldVoiceState.channel
  const newUserChannel = newVoiceState.channel

  if (!!oldUserChannel || !newUserChannel) return

  const server = global.servers[newUserChannel.guild.id]
  if (
    !newVoiceState.member.user.bot
    && !server?.isPlaying
    && server.autoCommand?.voiceChannelId === newUserChannel.id
  ) {
    // rest args parser to start
    server.autoCommand.args.start()
    // because the 1st argument is the command name, disregard it
    await server.autoCommand.args.pick('string').catch(() => '')

    await server.autoCommand.command.messageRun(
      server.autoCommand.message,
      server.autoCommand.args
    )
  }
}
