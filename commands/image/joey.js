import BaseImageCommand from '../../base_image_command.js'

export default class Joey extends BaseImageCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'joey',
      category: 'image',
      description: 'Joey M. Eatballs at your service'
    })
    this.fileNames = ['joey.png']
  }
}
