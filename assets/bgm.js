// bgm.js
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById("bgm");
    const muteBtn = document.getElementById("mute-btn");
    const playBtn = document.getElementById("play-btn");

    // localStorageの値を確認
    if (localStorage.getItem("audioMuted") === "true") {
        audio.muted = true;
        muteBtn.textContent = "🔈 ミュート解除";
    }

    if (localStorage.getItem("audioPlaying") === "true") {
        audio.play().catch(err => {
            console.log("自動再生失敗:", err);
            playBtn.style.display = "inline";
        });
    } else {
        playBtn.style.display = "inline";
    }

    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? "🔈 ミュート解除" : "🔊 ミュート";
        localStorage.setItem("audioMuted", audio.muted);
    });

    playBtn.addEventListener("click", () => {
        audio.play().then(() => {
            localStorage.setItem("audioPlaying", true);
            playBtn.style.display = "none";
        });
    });
});
