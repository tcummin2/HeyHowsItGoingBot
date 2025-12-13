import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class SadEarrape extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'sadearrape',
      fullCategory: ['sounds'],
      description: 'Sad voilin EARRAPE'
    })
    this.fileNames = ['sad-violin-earrape.mp3']
  }
}
