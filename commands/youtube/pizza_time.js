const BaseYoutubeCommand = require('../../base_youtube_command')

class PizzaTime extends BaseYoutubeCommand {
  constructor(client) {
    super(client, {
      name: 'pizzatime',
      group: 'youtube',
      memberName: 'pizzatime',
      description: 'If I flip the pizzas Mr Aziz will flip out'
    })
    this.url = 'https://www.youtube.com/watch?v=czTksCF6X8Y'
    this.volume = 0.1
  }
}

module.exports = PizzaTime