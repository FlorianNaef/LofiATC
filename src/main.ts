import { SourceManager } from "./SourceManager";
import "./style.css";

const musicAudioElement = document.getElementById(
  "music-audio-element"
) as HTMLAudioElement;
const atcAudioElement = document.getElementById(
  "atc-audio-element"
) as HTMLAudioElement;
const nextButton = document.getElementById("next-button") as HTMLButtonElement;
const pauseMusicButton = document.getElementById(
  "pause-music-button"
) as HTMLButtonElement;
const pauseAtcButton = document.getElementById(
  "pause-atc-button"
) as HTMLButtonElement;
const musicVolumeInput = document.getElementById(
  "music-volume-input"
) as HTMLInputElement;
const atcVolumeInput = document.getElementById(
  "atc-volume-input"
) as HTMLInputElement;

const sourceManager = new SourceManager();

pauseMusicButton.addEventListener("click", () => {
  if (musicAudioElement.paused) {
    pauseMusicButton.innerText = "PAUSE";
    musicAudioElement.play();
    return;
  }
  pauseMusicButton.innerText = "PLAY";
  musicAudioElement.pause();
});
pauseAtcButton.addEventListener("click", () => {
  if (atcAudioElement.paused) {
    pauseAtcButton.innerText = "PAUSE";
    atcAudioElement.play();
    return;
  }
  pauseAtcButton.innerText = "PLAY";
  atcAudioElement.pause();
});
nextButton.addEventListener("click", () => {
  sourceManager.next();
  reload();
});
musicVolumeInput.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  musicAudioElement.volume = parseInt(target.value) / 100;
});
atcVolumeInput.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  atcAudioElement.volume = parseInt(target.value) / 100;
});

reload();

musicAudioElement.volume = parseInt(musicVolumeInput.value) / 100;
atcAudioElement.volume = parseInt(atcVolumeInput.value) / 100;

function reload() {
  musicAudioElement.src = sourceManager.currentMusicSource;
  atcAudioElement.src = sourceManager.currentAtcSource;
  musicAudioElement.load();
  musicAudioElement.play();
  atcAudioElement.load();
  atcAudioElement.play();
}
