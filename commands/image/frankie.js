import BaseImageCommand from '../../base_image_command.js'

export default class Frankie extends BaseImageCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'frankie',
      category: 'image',
      description: 'Frankie L. Sagna at your service'
    })
    this.fileNames = ['frankie.jpg']
  }
}
