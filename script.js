'use strict';

// Map of keys to sounds
const sounds = {
  a: "sounds/crash.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/kick.mp3",
  f: "sounds/tom1.mp3",
  g: "sounds/tom2.mp3",
  h: "sounds/tom3.mp3",
  j: "sounds/tom4.mp3"
};

// Play sound function
function playSound(key) {
  if (sounds[key]) {
    const audio = new Audio(sounds[key]);
    audio.currentTime = 0;
    audio.play();

    const drum = document.querySelector(`.drum[data-key="${key}"]`);
    if (drum) {
      drum.classList.add("active");
      setTimeout(() => drum.classList.remove("active"), 200);
    }
  }
}

// Keyboard events
document.addEventListener("keydown", (e) => {
  playSound(e.key.toLowerCase());
});

// Mouse clicks
document.querySelectorAll(".drum").forEach(drum => {
  drum.addEventListener("click", () => {
    const key = drum.getAttribute("data-key");
    playSound(key);
  });
});
