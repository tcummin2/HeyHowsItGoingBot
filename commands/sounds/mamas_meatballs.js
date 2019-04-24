const BaseSoundCommand = require('../../base_sound_command')

class MamasMeatballs extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'meatballs',
      group: 'sounds',
      memberName: 'meatballs',
      description: 'Nothin\' beats mama\'s meatballs'
    })
    this.fileNames = ['mamas-meatballs.mp3', 'mamas-meatballs-2.mp3', 'nothin-better.mp3']
  }
}

module.exports = MamasMeatballs