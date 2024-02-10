import BaseSoundCommand from '../../base_sound_command.js'

export default class Toss extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'toss',
      category: 'sounds',
      description: 'I CANNOT JUMP THE DISTANCE YOU\'LL HAVE TO TOSS ME',
      aliases: ['tossme']
    })
    this.fileNames = ['toss.mp3']
  }
}
