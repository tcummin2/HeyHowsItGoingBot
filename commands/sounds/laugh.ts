import fs from 'fs'
import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Laugh extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'laugh',
      fullCategory: ['sounds'],
      description: 'Laugh track'
    })
    this.fileNames = fs.readdirSync('./sounds/laugh').map(fileName => `laugh/${fileName}`)
  }
}
