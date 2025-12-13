import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Chewsday extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'chewsday',
      fullCategory: ['sounds'],
      description: 'Chewsday, innit?',
      aliases: ['innit', 'chewsdayinnit']
    })
    this.fileNames = ['chewsday.mp3', 'chewsday-2.mp3']
  }
}
