import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Titanic extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'titanic',
      fullCategory: ['sounds'],
      description: 'Gentlemen, it has been a privilege playing with you tonight'
    })
    this.fileNames = ['titanic.mp3', 'titanic-2.mp3', 'titanic-3.mp3', 'titanic-4.mp3', 'titanic-bass.mp3']
  }
}
