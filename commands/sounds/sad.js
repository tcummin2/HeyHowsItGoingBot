const BaseSoundCommand = require('../../base_sound_command')

class Sad extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'sad',
      group: 'sounds',
      memberName: 'sad',
      description: 'OMG this is so sad, Alexa play Take On Me by Reel Big Fish',
      aliases: ['sadd', 'thisissosad', 'f']
    })
    this.ignoreArguments = true
    this.fileNames = [
      'sad-violin.mp3',
      'mmm.mp3',
      'enya.mp3',
      'silence.mp3',
      'untitled.mp3',
      'gandalf.mp3',
      'hurt.mp3',
      'fine.mp3',
      'suffer.mp3',
      'titanic.mp3',
      'titanic-bass.mp3',
      'recorder-3.mp3',
      'aerith.mp3',
      'beethoven.mp3',
      'mozart.mp3',
      'never-forget.mp3',
      'pagliacci.mp3',
      'on-the-nature-of-daylight.mp3',
      'up.mp3',
      'adagio-for-strings.mp3'
    ]
  }
}

module.exports = Sad