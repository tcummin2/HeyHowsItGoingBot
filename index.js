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
    ['hey', 'Hey']
  ])
  .registerDefaultCommands({
    help: false,
    ping: false,
    unknownCommand: false,
    commandState: false
  })
  .registerCommandsIn(`${__dirname}/commands`)

client.login(config.token)
  .then(console.log('Ready'))