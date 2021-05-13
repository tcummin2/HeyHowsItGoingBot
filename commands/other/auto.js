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
          const [command] = client.registry.findCommands(value)
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

  async run(message, args) {
    const { member, guild, channel, client } = message
    const { command, commandArgs } = args

    if (!global.servers[guild.id]) global.servers[guild.id] = {}
    let serverInfo = global.servers[guild.id]
    const voiceChannel = member.voice.channel

    if (voiceChannel) {
      Object.assign(serverInfo, {
        autoCommand: {
          command,
          commandArgs,
          voiceChannelId: voiceChannel.id,
        }
      })

      client.on('voiceStateUpdate', onVoiceUpdate)

      const commandText = [`!${command.name}`, ...commandArgs.split(' ')].filter(x => x).join(' ')
      channel.send(`Auto-join command set for <#${voiceChannel.id}>: \`${commandText}\``)
    }
  }
}

module.exports = Auto