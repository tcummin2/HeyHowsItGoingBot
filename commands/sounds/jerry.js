import fs from 'fs'
import BaseSoundCommand from '../../base_sound_command.js'

export default class Jerry extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'jerry',
      category: 'sounds',
      description: 'Jerry!'
    })
    this.fileNames = fs.readdirSync('./sounds/jerry').map(fileName => `jerry/${fileName}`)
  }
}
