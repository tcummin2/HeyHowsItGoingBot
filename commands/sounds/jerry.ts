import fs from 'fs'
import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Jerry extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'jerry',
      fullCategory: ['sounds'],
      description: 'Jerry!'
    })
    this.fileNames = fs.readdirSync('./sounds/jerry').map(fileName => `jerry/${fileName}`)
  }
}
