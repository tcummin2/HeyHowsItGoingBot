import BaseSoundCommand from '../../base_sound_command.js'

export default class Titanic extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'titanic',
      category: 'sounds',
      description: 'Gentlemen, it has been a privilege playing with you tonight'
    })
    this.fileNames = ['titanic.mp3', 'titanic-2.mp3', 'titanic-3.mp3', 'titanic-4.mp3', 'titanic-bass.mp3']
  }
}
