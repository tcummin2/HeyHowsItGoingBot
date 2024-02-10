import BaseTextCommand from '../../base_text_command.js'

export default class HeyText extends BaseTextCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'heytext',
      category: 'text',
      description: 'Hey how\'s it going'
    })
  }
}
