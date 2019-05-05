const BaseSoundCommand = require('../../base_youtube_command')

class FluteSalad extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'flutesalad',
      group: 'youtube',
      memberName: 'flutesalad',
      description: 'I\'m just here for Flute Salad'
    })
    this.url = 'https://www.youtube.com/watch?v=LFgvAyJWkjU'
    this.volume = 0.4
  }
}

module.exports = FluteSalad