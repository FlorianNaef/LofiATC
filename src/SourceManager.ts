export class SourceManager {
  private musicSource: MusicSource = MusicSource.CHILLING;
  private atcSource: AtcSource = AtcSource.ARINC;

  get currentMusicSource() {
    return this.musicSource.toString();
  }

  get currentAtcSource() {
    return this.atcSource.toString();
  }

  next() {
    const values = Object.values(MusicSource);
    const index = (values.indexOf(this.musicSource) + 1) % values.length;
    this.musicSource = values[index];
  }

  setAtcSource(source: AtcSource) {
    this.atcSource = source;
  }
}

export enum AtcSource {
  ARINC = "https://s1-bos.liveatc.net/kjfk9_s",
  LURAY = "https://s1-fmt2.liveatc.net/kmrb1_app_luray",
}

export enum MusicSource {
  STUDYING = "https://www.loficafe.net/api/stream/studying.mp3",
  CHILLING = "https://www.loficafe.net/api/stream/chilling.mp3",
  WORKING = "https://www.loficafe.net/api/stream/working.mp3",
  SLEEPING = "https://www.loficafe.net/api/stream/sleeping.mp3",
  JAPANESE = "https://www.loficafe.net/api/stream/japanese_lofi.mp3",
  GAMING = "https://www.loficafe.net/api/stream/gaming.mp3",
}
