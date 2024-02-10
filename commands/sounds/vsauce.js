import BaseSoundCommand from '../../base_sound_command.js'

export default class VSauce extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vsauce',
      category: 'sounds',
      description: 'Hey, VSauce! Michael Here'
    })
    this.fileNames = ['vsauce.mp3']
  }
}
