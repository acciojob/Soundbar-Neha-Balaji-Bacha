const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong",
  "stop"
];

const buttons = document.querySelectorAll(".sound-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const soundName = btn.textContent;
    playSound(soundName);
  });
});

function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}
