import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Recorder extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'recorder',
      fullCategory: ['sounds'],
      description: 'My Heart Will Go On',
      aliases: ['titanicrecorder']
    })
    this.fileNames = ['recorder.mp3', 'recorder-2.mp3', 'recorder-3.mp3', 'recorder-4.mp3']
  }
}
