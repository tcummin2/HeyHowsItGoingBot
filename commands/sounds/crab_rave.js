import BaseSoundCommand from '../../base_sound_command.js'

export default class CrabRave extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'crabrave',
      category: 'sounds',
      description: '🦀 BABY YODA IS GONE 🦀',
      aliases: ['crab', '🦀']
    })
    this.fileNames = ['crab-rave.mp3']
  }
}
