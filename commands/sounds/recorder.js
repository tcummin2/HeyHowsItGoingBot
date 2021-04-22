const BaseSoundCommand = require('../../base_sound_command')

class Recorder extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'recorder',
      group: 'sounds',
      memberName: 'recorder',
      description: 'My Heart Will Go On',
      aliases: ['titanicrecorder']
    })
    this.fileNames = ['recorder.mp3', 'recorder-2.mp3', 'recorder-3.mp3', 'recorder-4.mp3']
  }
}

module.exports = Recorder