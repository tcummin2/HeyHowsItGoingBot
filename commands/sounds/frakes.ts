import fs from 'fs'
import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Frakes extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'frakes',
      fullCategory: ['sounds'],
      description: 'You\'re wrong.',
      aliases: ['jonathanfrakes']
    })
    this.fileNames = fs.readdirSync('./sounds/frakes').map(fileName => `frakes/${fileName}`)
  }
}
