import type { Command } from '@sapphire/framework'
import BaseImageCommand from '../../base_image_command.ts'

export default class Bobby extends BaseImageCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'bobby',
      fullCategory: ['image'],
      description: 'Bobby C. Annoli at your service'
    })
    this.fileNames = ['bobby.jpg']
  }
}
