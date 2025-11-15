const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

function stopAllSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const soundId = btn.getAttribute("data-sound");

        stopAllSounds(); // stop any playing sounds

        const audio = document.getElementById(soundId);
        audio.currentTime = 0;
        audio.play();
    });
});

stopButton.addEventListener("click", () => {
    stopAllSounds();
});
