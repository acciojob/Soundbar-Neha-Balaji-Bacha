const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const soundName = btn.textContent;
    playSound(soundName);
  });
});

function playSound(name) {
  stopAllSounds();
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
  window.currentSound = audio; // store reference
}

stopBtn.addEventListener("click", stopAllSounds);

function stopAllSounds() {
  if (window.currentSound) {
    window.currentSound.pause();
    window.currentSound.currentTime = 0;
  }
}
