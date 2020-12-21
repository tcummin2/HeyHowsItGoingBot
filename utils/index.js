module.exports = {
  onVoiceUpdate(oldMember, newMember) {
    var newUserChannel = newMember.voiceChannel
    var oldUserChannel = oldMember.voiceChannel

    if (oldUserChannel !== undefined || newUserChannel === undefined) return

    var server = global.servers[newUserChannel.guild.id]
    if (!newMember.user.bot && server && !server.isPlaying
        && server.autoCommand && server.autoCommand.voiceChannelId === newUserChannel.id) {
      server.autoCommand.command.run({
        member: newMember,
        guild: newUserChannel.guild
      }, server.autoCommand.commandArgs)
    }
  }
}