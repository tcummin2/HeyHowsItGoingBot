import BaseImageCommand from '../../base_image_command.js'

export default class Grant extends BaseImageCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'grant',
      category: 'image',
      description: 'Grant R. Avioli at your service'
    })
    this.fileNames = ['grant.jpg']
  }
}
