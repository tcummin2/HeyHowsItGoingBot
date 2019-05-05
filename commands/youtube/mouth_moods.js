const BaseSoundCommand = require('../../base_youtube_command')

class MouthMoods extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'mouthmoods',
      group: 'youtube',
      memberName: 'mouthmoods',
      description: 'It\'s been'
    })
    this.url = 'https://www.youtube.com/watch?v=m0nIVGoFh8I'
    this.volume = 0.2
  }
}

module.exports = MouthMoods