const BaseYoutubeCommand = require('../../base_youtube_command')

class LePerv extends BaseYoutubeCommand {
  constructor(client) {
    super(client, {
      name: 'leperv',
      group: 'youtube',
      memberName: 'leperv',
      description: 'More like Carpenter Butt'
    })
    this.url = 'https://www.youtube.com/watch?v=RYtVf0wvPpc'
    this.volume = 0.05
  }
}

module.exports = LePerv