const { Client } = require('discord.js-commando')
const config = require('./config.json')

global.servers = {}

const AUTOHEY_COMMAND = {
  name: 'hey',
  args: '1'
}

const client = new Client({
  owner: config.ownerId,
  unknownCommandResponse: false
})

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerGroups([
    ['text', 'Text'],
    ['sounds', 'Sounds'],
    ['youtube', 'YouTube'],
    ['image', 'Image'],
    ['hey', 'Hey'],
    ['tts', 'Tts'],
    ['hidden', 'Hidden'],
    ['other', 'Other']
  ])
  .registerDefaultCommands({
    ping: false,
    unknownCommand: false,
    commandState: false
  })
  .registerCommandsIn(`${__dirname}/commands`)

client.login(config.token)
  .then(console.log('Ready'))

client.on('voiceStateUpdate', (oldMember, newMember) => {
  var newUserChannel = newMember.voiceChannel
  var oldUserChannel = oldMember.voiceChannel

  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    var server = global.servers[newUserChannel.guild.id]
    if (newMember.user.id !== config.botId && server && !server.isPlaying
        && server.autoHey && server.autoHey.voiceChannelId === newUserChannel.id) {
      client.registry.findCommands(AUTOHEY_COMMAND.name)[0].run({
        member: newMember,
        guild: newUserChannel.guild
      }, AUTOHEY_COMMAND.args)
    }
  }
})

client.on('error', console.error)