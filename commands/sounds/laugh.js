import fs from 'fs'
import BaseSoundCommand from '../../base_sound_command.js'

export default class Laugh extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'laugh',
      category: 'sounds',
      description: 'Laugh track'
    })
    this.fileNames = fs.readdirSync('./sounds/laugh').map(fileName => `laugh/${fileName}`)
  }
}
