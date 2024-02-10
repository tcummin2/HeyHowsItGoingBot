import BaseSoundCommand from '../../base_sound_command.js'

export default class LetTeephSleep extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'letteephsleep',
      category: 'sounds',
      description: 'Shhh baby sleeping'
    })
    this.fileNames = ['let-teeph-sleep.mp3']
  }
}
