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

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key-box[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0; // reset the play time
  audio.play();
  key.classList.add('playing'); // border-color: yellow
});

window.addEventListener('keyup', function(e) {
  const key = document.querySelector(`.key-box[data-key='${e.keyCode}']`);
  key.classList.remove('playing'); // remove the border-color
});
