import BaseSoundCommand from '../../base_sound_command.js'

export default class Recorder extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'recorder',
      category: 'sounds',
      description: 'My Heart Will Go On',
      aliases: ['titanicrecorder']
    })
    this.fileNames = ['recorder.mp3', 'recorder-2.mp3', 'recorder-3.mp3', 'recorder-4.mp3']
  }
}
