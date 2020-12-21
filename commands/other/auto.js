const { Command } = require('discord.js-commando')
const BaseSoundCommand = require('../../base_sound_command')
const { onVoiceUpdate } = require('../../utils')

class Auto extends Command {
  constructor(client) {
    super(client, {
      name: 'auto',
      group: 'other',
      memberName: 'auto',
      description: 'Set an auto-join sound command in server',
      args: [{
        key: 'command',
        type: 'command',
        prompt: '', // Prompt has to be not null even if argsPromptLimit = 0
        validate(value) {
          var [command] = client.registry.findCommands(value)
          return command instanceof BaseSoundCommand && command.isAutomatable
        }
      }, {
        key: 'commandArgs',
        type: 'string',
        prompt: '', // Prompt has to be not null even if argsPromptLimit = 0
        default: ''
      }],
      argsPromptLimit: 0
    })
  }

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

  async run(message, args) {
    var { member, guild, channel, client } = message
    const { command, commandArgs } = args

    if (!global.servers[guild.id]) global.servers[guild.id] = {}
    let serverInfo = global.servers[guild.id]

    if (commandArgs === 'stop') {
      Object.assign(serverInfo, { auto: null })
      client.off('voiceStateUpdate', onVoiceUpdate)
    } else if (member.voiceChannel) {
      Object.assign(serverInfo, {
        autoCommand: {
          command,
          commandArgs,
          voiceChannelId: member.voiceChannel.id,
        }
      })

      client.on('voiceStateUpdate', onVoiceUpdate)

      const commandText = [`!${command.name}`, ...commandArgs.split(' ')].filter(x => x).join(' ')
      channel.send(`Auto-join command set for <#${member.voiceChannel.id}>: \`${commandText}\``)
    }
  }
}

module.exports = Auto