const BaseSoundCommand = require('../../base_sound_command')

class CrabRave extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'crabrave',
      group: 'sounds',
      memberName: 'crabrave',
      description: '🦀 BABY YODA IS GONE 🦀',
      aliases: ['crab', '🦀']
    })
    this.fileNames = ['crab-rave.mp3']
  }
}

module.exports = CrabRave