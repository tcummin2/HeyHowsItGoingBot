import BaseSoundCommand from '../../base_sound_command.js'

export default class Hello extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'hello',
      category: 'sounds',
      description: 'Hello'
    })
    this.fileNames = ['Hello.mp3']
  }
}
