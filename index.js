import path from 'path'
import { GatewayIntentBits } from 'discord.js'
import { SapphireClient } from '@sapphire/framework'
import config from './config.json' with { type: 'json' }

global.__dirname = path.resolve();

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
    client.on('error', console.error)
  } catch (error) {
    client.logger.fatal(error);
    client.destroy()
    process.exit(1)
  }
}

loadBot()
