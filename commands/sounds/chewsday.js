const BaseSoundCommand = require('../../base_sound_command')

class Chewsday extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'chewsday',
      group: 'sounds',
      memberName: 'chewsday',
      description: 'Chewsday, innit?',
      aliases: ['innit', 'chewsdayinnit']
    })
    this.fileNames = ['chewsday.mp3', 'chewsday-2.mp3']
  }
}

module.exports = Chewsday