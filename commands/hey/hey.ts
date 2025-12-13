import fs from 'fs'
import path from 'path'
import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Hey extends BaseSoundCommand {
  defaultFile: string

  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'hey',
      fullCategory: ['hey'],
      description: 'Hey how\'s it going'
    })
    this.defaultFile = 'hey.mp3'
    this.fileNames = [...new Set([this.defaultFile, ...fs.readdirSync(path.resolve('sounds', 'hey'))])]
      .map(fileName => path.join('hey', fileName))
  }
}
