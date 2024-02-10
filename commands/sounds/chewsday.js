import BaseSoundCommand from '../../base_sound_command.js'

export default class Chewsday extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'chewsday',
      category: 'sounds',
      description: 'Chewsday, innit?',
      aliases: ['innit', 'chewsdayinnit']
    })
    this.fileNames = ['chewsday.mp3', 'chewsday-2.mp3']
  }
}
