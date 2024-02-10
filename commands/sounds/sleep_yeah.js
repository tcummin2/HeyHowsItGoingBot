import BaseSoundCommand from '../../base_sound_command.js'

export default class SleepYeah extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'sleepyeah',
      category: 'sounds',
      description: 'GIVE US ANOTHER ONE'
    })
    this.fileNames = ['sleep-yeah.mp3']
  }
}
