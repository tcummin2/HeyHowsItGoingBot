const { Client, GatewayIntentBits } = require('discord.js')
const axios = require('axios')
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

const defaultText = 'shut up'
let navySealCopyPasta
axios.get('https://raw.githubusercontent.com/Patater/qso-generator/master/corpora/navy-seal-copypasta.txt')
  .then(response => {
    navySealCopyPasta = response.data
  })

client.on('messageCreate', async ({ channel, content, author }) => {
  if (content.startsWith('!') && !author.bot) {
    const randomNumber = Math.floor(Math.random() * 10)
    const content = randomNumber === 0 ? navySealCopyPasta : defaultText
    await channel.send({ content })
  }
})