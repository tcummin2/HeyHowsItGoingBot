import BaseSoundCommand from '../../base_sound_command.js'

export default class Victory extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'Victory',
      category: 'sounds',
      description: 'You did it!',
      aliases: ['win', 'v']
    })
    this.ignoreArguments = true
    this.fileNames = [
      'victory-ffvii.mp3',
      'sonic-act-cleared.mp3'
    ]
  }
}
