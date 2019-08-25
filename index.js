const { Client } = require('discord.js-commando')
const config = require('./config.json')

global.servers = {}

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
      newUserChannel.join()
        .then(connection => {
          // Very hacky, need a way to call a command directly
          var filePath = `${__dirname}/sounds/hey/hey.mp3`
          server.dispatcher = connection.playFile(filePath)

          server.dispatcher.on('end', () => {
            setTimeout(() => connection.disconnect(), 3000)
          })
        })
    }
  }
})

client.on('error', console.error)