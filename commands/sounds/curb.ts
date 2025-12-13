import type { Command } from '@sapphire/framework'
import BaseSoundCommand from '../../base_sound_command.ts'

export default class Curb extends BaseSoundCommand {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'curb',
      fullCategory: ['sounds'],
      description: 'Pretty pretty pretty good',
      aliases: ['curbyourenthusiasm']
    })
    this.fileNames = ['curb.mp3']
  }
}
