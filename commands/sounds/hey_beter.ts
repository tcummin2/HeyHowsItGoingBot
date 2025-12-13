import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class HeyBeter extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'heybeter',
      fullCategory: ['sounds'],
      description: 'Hey 🅱️eter'
    })
    this.fileNames = ['hey-beter.mp3', 'hey-beter-ethereal.mp3']
  }
}
