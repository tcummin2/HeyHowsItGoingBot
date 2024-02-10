import BaseImageCommand from '../../base_image_command.js'

export default class Franklin extends BaseImageCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'franklin',
      category: 'image',
      description: 'Franklin S. Paghetti at your service'
    })
    this.fileNames = ['franklin.jpg']
  }
}
