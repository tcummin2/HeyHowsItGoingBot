import type { Command } from '@sapphire/framework'
import BaseImageCommand from '../../base_image_command.ts'

export default class Joey extends BaseImageCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'joey',
      fullCategory: ['image'],
      description: 'Joey M. Eatballs at your service'
    })
    this.fileNames = ['joey.png']
  }
}
