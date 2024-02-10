import BaseTextCommand from '../../base_text_command.js'

const GITHUB_URL = 'https://github.com/tcummin2/HeyHowsItGoingBot'

export default class Git extends BaseTextCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'git',
      category: 'text',
      description: `git gud baddie ${GITHUB_URL}`
    })
  }
}
