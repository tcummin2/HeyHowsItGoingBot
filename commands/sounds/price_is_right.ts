import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class PriceIsRight extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'priceisright',
      fullCategory: ['sounds'],
      description: 'Come on down!'
    })
    this.fileNames = ['price-is-right.mp3']
  }
}
