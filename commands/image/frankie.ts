import type { Command } from '@sapphire/framework'
import BaseImageCommand from '../../base_image_command.ts'

export default class Frankie extends BaseImageCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'frankie',
      fullCategory: ['image'],
      description: 'Frankie L. Sagna at your service'
    })
    this.fileNames = ['frankie.jpg']
  }
}
