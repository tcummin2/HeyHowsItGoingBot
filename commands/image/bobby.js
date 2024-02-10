import BaseImageCommand from '../../base_image_command.js'

export default class Bobby extends BaseImageCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'bobby',
      category: 'image',
      description: 'Bobby C. Annoli at your service'
    })
    this.fileNames = ['bobby.jpg']
  }
}
