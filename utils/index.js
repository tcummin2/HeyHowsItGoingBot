module.exports = {
  onVoiceUpdate(oldVoiceState, newVoiceState) {
    const oldUserChannel = oldVoiceState.channel
    const newUserChannel = newVoiceState.channel

    if (!!oldUserChannel || !newUserChannel) return

    const server = global.servers[newUserChannel.guild.id]
    if (!newVoiceState.member.user.bot && server && !server.isPlaying
        && server.autoCommand && server.autoCommand.voiceChannelId === newUserChannel.id) {
      server.autoCommand.command.run({
        member: newVoiceState.member,
        guild: newUserChannel.guild
      }, server.autoCommand.commandArgs)
    }
  }
}