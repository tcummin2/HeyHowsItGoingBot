const BaseSoundCommand = require('../../base_sound_command')

class Sad extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sad',
      group: 'sounds',
      memberName: 'sad',
      description: 'OMG this is so sad, Alexa play Take On Me by Reel Big Fish',
      aliases: ['sadd', 'sus', 'amongus', 'thisissosad']
    })
    this.ignoreArguments = true
    this.fileNames = ['sad-violin.mp3', 'mmm.mp3','enya.mp3', 'silence.mp3', 'untitled.mp3', 'gandalf.mp3', 'hurt.mp3', 'fine.mp3', 'suffer.mp3']
  }
}

module.exports = Sad