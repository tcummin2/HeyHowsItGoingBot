import BaseSoundCommand from '../../base_sound_command.js'

export default class WitnessMe extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'witnessme',
      category: 'sounds',
      description: 'Witness me.',
      aliases: ['witness']
    })
    this.fileNames = ['witness-me.mp3', 'witness-me-reverb.mp3', 'witness-me-em-ssentiw.mp3', 'witness-me-stereo.mp3', 'witness-me-stereo-demonic.mp3']
  }
}
