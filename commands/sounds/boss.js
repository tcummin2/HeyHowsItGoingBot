import BaseSoundCommand from '../../base_sound_command.js'

export default class Boss extends BaseSoundCommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'boss',
      category: 'sounds',
      description: 'Why do I hear boss music',
      aliases: ['bossfight', 'bossmusic']
    })
    this.ignoreArguments = true
    this.fileNames = [
      'dies-irae.mp3',
      'kylo-ren.mp3',
      'mars.mp3',
      'nfl.mp3',
      'o-fortuna.mp3',
      'vordt.mp3',
      'price-is-right.mp3',
      'superman.mp3',
      'megalovania.mp3',
      'daytona.mp3',
      'duel-of-the-fates.mp3',
      'digiorno.mp3',
      'sm64-boss.mp3',
      'sm64-slider.mp3',
      'big-chungus.mp3',
      'godskin-apostles.mp3'
    ]
  }
}
