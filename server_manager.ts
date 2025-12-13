class ServerManager {
  isPlayingMap: Map<string, boolean> = new Map()

  setPlaying(guildId: string, isPlaying: boolean): void {
    this.isPlayingMap.set(guildId, isPlaying)
  }

  isServerPlaying(guildId: string): boolean {
    return this.isPlayingMap.get(guildId) ?? false
  }
}

export default new ServerManager()
