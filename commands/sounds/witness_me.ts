import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class WitnessMe extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'witnessme',
      fullCategory: ['sounds'],
      description: 'Witness me.',
      aliases: ['witness']
    })
    this.fileNames = [
      'witness-me.mp3',
      'witness-me-reverb.mp3',
      'witness-me-em-ssentiw.mp3',
      'witness-me-stereo.mp3',
      'witness-me-stereo-demonic.mp3'
    ]
  }
}
