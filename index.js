import path from 'path'
import { GatewayIntentBits, Events } from 'discord.js'
import { SapphireClient } from '@sapphire/framework'
import yargs from 'yargs'
import config from './config.json' with { type: 'json' }

const { argv } = yargs(process.argv)

global.servers = {}

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  loadMessageCommandListeners: true,
  caseInsensitiveCommands: true,
  caseInsensitivePrefixes: true,
  defaultPrefix: '!',
  typing: true,
  disableMentionPrefix: true
})

async function loadBot() {
  try {
    await client.login(config.token)
    client.logger.info('Ready')
    client.on(Events.Error, console.error)

    client.on(Events.ClientReady, async () => {
      if (argv.wake) {
        await Promise.all(client.guilds.cache.map(async guild => {
          const generalChannel = guild.channels.cache.find(channel => channel.name.includes('general'))
          await generalChannel?.send({
            files: [{
              attachment: path.resolve('img', 'wake-up.gif'),
              name: 'wake-up.gif'
            }]
          })
        }))
      }
    })
  } catch (error) {
    client.logger.fatal(error);
    client.destroy()
    process.exit(1)
  }
}

loadBot()
