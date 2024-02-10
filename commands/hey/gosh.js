import BaseSoundCommand from '../../base_sound_command.js'

export default class HeyGosh extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'heygosh',
      category: 'hey',
      description: 'HHHHHHEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYY'
    })
    this.fileNames = ['hey/gosh.mp3']
  }
}
