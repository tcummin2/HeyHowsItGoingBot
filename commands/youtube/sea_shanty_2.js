const BaseSoundCommand = require('../../base_youtube_command')

class SeaShanty2 extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'seashanty2',
      group: 'youtube',
      memberName: 'seashanty2',
      description: 'Who could forget'
    })
    this.url = 'https://www.youtube.com/watch?v=BJhF0L7pfo8'
    this.volume = 0.2
  }
}

module.exports = SeaShanty2