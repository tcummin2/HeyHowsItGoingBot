const BaseSoundCommand = require('../../base_sound_command')

class SleepYeah extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sleepyeah',
      group: 'sounds',
      memberName: 'sleepyeah',
      description: 'GIVE US ANOTHER ONE'
    })
    this.fileNames = ['sleep-yeah.mp3']
  }
}

module.exports = SleepYeah