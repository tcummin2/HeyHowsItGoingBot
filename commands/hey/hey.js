import fs from 'fs'
import path from 'path'
import BaseSoundCommand from '../../base_sound_command.js'

export default class Hey extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'hey',
      category: 'hey',
      description: 'Hey how\'s it going'
    })
    this.defaultFile = 'hey.mp3'
    this.fileNames = [...new Set([this.defaultFile, ...fs.readdirSync(path.resolve('sounds', 'hey'))])]
      .map(fileName => path.join('hey', fileName))
  }
}
