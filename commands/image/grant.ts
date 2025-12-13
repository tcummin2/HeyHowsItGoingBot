import type { Command } from '@sapphire/framework'
import BaseImageCommand from '../../base_image_command.ts'

export default class Grant extends BaseImageCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'grant',
      fullCategory: ['image'],
      description: 'Grant R. Avioli at your service'
    })
    this.fileNames = ['grant.jpg']
  }
}
