import type { Command } from '@sapphire/framework'
import BaseImageCommand from '../../base_image_command.ts'

export default class Franklin extends BaseImageCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'franklin',
      fullCategory: ['image'],
      description: 'Franklin S. Paghetti at your service'
    })
    this.fileNames = ['franklin.jpg']
  }
}
