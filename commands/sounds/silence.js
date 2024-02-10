import BaseSoundCommand from '../../base_sound_command.js'

export default class Silence extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'silence',
      category: 'sounds',
      description: 'Hello darkness my old friend',
      aliases: ['darkness', 'hellodarkness', 'soundofsilence']
    })
    this.fileNames = ['silence.mp3']
  }
}
