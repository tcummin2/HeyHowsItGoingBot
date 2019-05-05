const BaseSoundCommand = require('../../base_youtube_command')

class WowWow extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'wowwow',
      group: 'youtube',
      memberName: 'wowwow',
      description: 'Wow Wow'
    })
    this.url = 'https://www.youtube.com/watch?v=CPhXKak_bHw'
    this.volume = 0.1
  }
}

module.exports = WowWow