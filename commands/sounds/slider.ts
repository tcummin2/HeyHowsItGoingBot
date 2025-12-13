import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Slider extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'slider',
      fullCategory: ['sounds'],
      description: 'Yahoo!'
    })
    this.fileNames = ['sm64-slider.mp3']
  }
}
