/* eslint-disable no-unused-vars */

/**
 * Play sound base on the soundName.
 * @param {string} soundName The sound type.
 */
function playSound(soundName) {
  const audio = document.getElementById(soundName);
  audio.currentTime = 0; // reset the play time
  audio.play();
}

let audio;
let key;

// keyboardからのイベント(押した時)
window.addEventListener('keydown', function(event) {
  audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  key = document.querySelector(`.key-box[data-key='${event.keyCode}']`);
  if (!audio || key == null) return;
  audio.currentTime = 0; // reset the play time
  audio.play();
  key.classList.add('playing'); // border-color: yellow
});

// keyboardからのイベント(離した時)
window.addEventListener('keyup', function(event) {
  key = document.querySelector(`.key-box[data-key='${event.keyCode}']`);
  if (key == null) return;
  key.classList.remove('playing'); // remove the border-color
});
