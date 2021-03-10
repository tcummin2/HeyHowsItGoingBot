const BaseSoundCommand = require('../../base_sound_command')

class WitnessMe extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'witnessme',
      group: 'sounds',
      memberName: 'witnessme',
      description: 'Witness me.',
      aliases: ['witness']
    })
    this.fileNames = ['witness-me.mp3', 'witness-me-reverb.mp3', 'witness-me-em-ssentiw.mp3', 'witness-me-stereo.mp3', 'witness-me-stereo-demonic.mp3']
  }
}

module.exports = WitnessMe