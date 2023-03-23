const { Client, GatewayIntentBits } = require('discord.js')
// const { Client, GatewayIntentBits } = require('discord.js-commando')
const config = require('./config.json')

global.servers = {}

const client = new Client({
  owner: config.ownerId,
  unknownCommandResponse: false,
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

// client.registry
//   .registerDefaultTypes()
//   .registerDefaultGroups()
//   .registerGroups([
//     ['text', 'Text'],
//     ['sounds', 'Sounds'],
//     ['image', 'Image'],
//     ['hey', 'Hey'],
//     ['tts', 'Tts'],
//     ['hidden', 'Hidden'],
//     ['other', 'Other']
//   ])
//   .registerDefaultCommands({
//     ping: false,
//     unknownCommand: false,
//     commandState: false
//   })
//   .registerCommandsIn(`${__dirname}/commands`)

client.login(config.token)
  .then(console.log('Ready'))

client.on('error', console.error)

client.on('messageCreate', async ({ channel, content, author }) => {
  if (content.startsWith('!') && !author.bot) {
    await channel.send({ content: 'shut up' })
  }
})