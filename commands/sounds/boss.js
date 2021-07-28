const BaseSoundCommand = require('../../base_sound_command')

class Boss extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'boss',
      group: 'sounds',
      memberName: 'boss',
      description: 'Why do I hear boss music',
      aliases: ['bossfight', 'bossmusic']
    })
    this.ignoreArguments = true
    this.fileNames = [
      'dies-irae.mp3',
      'kylo-ren.mp3',
      'mars.mp3',
      'nfl.mp3',
      'o-fortuna.mp3',
      'vordt.mp3'
    ]
  }
}

module.exports = Boss